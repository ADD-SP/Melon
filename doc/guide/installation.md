---
title: Installation Guide
lang: en
---

# Installation Guide

There is no difference between the Windows and UNIX environment, 
you just need to install and configure mingw, git bash and make first.

Execute the following command to install Melon.

```sh
git clone https://github.com/Water-Melon/Melon.git
./configure
make -j$(nproc)
make install
```

Melon will generate both dynamic and static libraries. 
For Linux systems, when using Melon's dynamic libraries, 
the path to the library needs to be added to the system configuration.

```sh
echo "/usr/local/melon/lib/" >> /etc/ld.so.conf
ldconfig
```

By default, Melon is installed in `/usr/local/melon` on UNIX and `$HOME/libmelon` on Windows.