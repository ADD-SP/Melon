---
title: Example
lang: en
---

# Examlpe

## Memory Pool

See below an example of using a memory pool.

```c
#include <stdio.h>
#include "mln_core.h"
#include "mln_alloc.h"
#include <mln_log.h>

int main(int argc, char *argv[])
{
    char *ptr;
    mln_alloc_t *pool;
    struct mln_core_attr cattr;

    cattr.argc = argc;
    cattr.argv = argv;
    cattr.global_init = NULL;
    cattr.worker_process = NULL;

    if (mln_core_init(&cattr) < 0) {
       fprintf(stderr, "Melon init failed.\n");
       return -1;
    }

    pool = mln_alloc_init();

    ptr = mln_alloc_m(pool, 1024);
    mln_log(debug, "%X\n", ptr);
    mln_alloc_free(ptr);

    mln_alloc_destroy(pool);
    return 0;
}
```

One of them, `mln_core_init`, is the Melon library initialization function. 
The function argument is a structure that is used to pass in program parameters, 
global variable initialization functions, and worker process handling functions. 
Since there is no intention to enable the multiprocess framework in this example and there is no need to initialize some global variables, both function pointers are left empty.

In the subsequent code.

* `mln_alloc_init`: for creating a memory pool
* `mln_alloc_m`: used to allocate a block of memory of the specified size from the memory pool
* `mln_alloc_free`: to free the memory allocated by the memory pool back into the pool
* `mln_alloc_destroy`: used to destroy the memory pool and free the resources

The memory pool related functions and structures are defined in mln_alloc.h.

`mln_log` is Melon's log output function, in this case outputting the starting address of memory allocated by the memory pool in hexadecimal.

The code is then compiled, and here is an example for UNIX systems.

```sh
cc -o test test.c -I /usr/local/melon/include/ -L /usr/local/melon/lib/ -lmelon
```

Windows users can also execute in git bash.

```sh
gcc -o test test.c -I $HOME/libmelon/include/ -L $HOME/libmelon/lib/ -llibmelon -lWs2_32
```

At this point, it is not yet possible to start the `test` program, because we first need to check the Melon library configuration file to make sure that the configuration does not make the program start multiple processes or multi-threaded frameworks (Windows users can ignore this step).

```vim
$ vim /usr/local/melon/conf/melon.conf

log_level "none";
//user "root";
daemon off;
core_file_size "unlimited";
//max_nofile 1024;
worker_proc 1;
thread_mode off;
framework off;
log_path "/usr/local/melon/logs/melon.log";
/*
 * Configurations in the 'exec_proc' are the
 * processes which are customized by user.
 *
 * Here is an example to show you how to
 * spawn a program.
 *     keepalive "/tmp/a.out" ["arg1" "arg2" ...]
 * The command in this example is 'keepalive' that
 * indicate master process to supervise this
 * process. If process is killed, master process
 * would restart this program.
 * If you don't want master to restart it, you can
 *     default "/tmp/a.out" ["arg1" "arg2" ...]
 *
 * But you should know that there is another
 * arugment after the last argument you write here.
 * That is the file descriptor which is used to
 * communicate with master process.
 */
exec_proc {
   // keepalive "/tmp/a";
}
thread_exec {
//    restart "hello" "hello" "world";
//    default "haha";
}
```