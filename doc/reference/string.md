---
title: String
lang: en
---

# String

Implemented common string processing functions, such as compare, cut and substring matching.

## `mln_string_new`

Initialize String with a string pointer.

::: tip NOTE

This function uses the C standard library function `void *malloc(size_t size)` to allocate memory.

:::

### Prototype

```c
mln_string_t *mln_string_new(const char *s);
```

### Parameters

* `s`: Pointer to a C-style string.

### Return Value

* `!NULL`: Pointer to `mln_string_t` initialized with `s`.
* `NULL`: Not enough memory.

## `mln_string_dup`

Copies the contents of `str` to a new object.

::: tip NOTE

This function uses the C standard library function `void *malloc(size_t size)` to allocate memory.

:::

### Prototype

```c
mln_string_t *mln_string_dup(mln_string_t *str);
```

### Parameters

* `str`: Pointer to `mln_string_t`, and its content will be copied to the new object.

### Return Value

* `!NULL`: A copy of `str`.
* `NULL`: Not enough memory.

## `mln_string_nDup`

Copies the contents of `str` to a new object.

::: tip NOTE

This function uses the C standard library function `void *malloc(size_t size)` to allocate memory.

:::

### Prototype

```c
mln_string_t *mln_string_nDup(mln_string_t *str, mln_s32_t size);
```

### Parameters

* `str`: Pointer to `mln_string_t`, and its content will be copied to the new object.
* `size`: The length of the `str` to be copied.

### Return Value

* `!NULL`: A copy of `str`.
* `NULL`: Not enough memory.

## `mln_string_nConstDup`

Copies the contents of `str` to a new object.

::: tip NOTE

This function uses the C standard library function `void *malloc(size_t size)` to allocate memory.

:::

### Prototype

```c
mln_string_t *mln_string_nConstDup(char *str, mln_s32_t size);
```

### Parameters

* `str`: Pointer to a string, and its content will be copied to the new object.
* `size`: The length of the `str` to be copied.

### Return Value

* `!NULL`: A copy of `str`.
* `NULL`: Not enough memory.

## `mln_string_refDup`

Returns a pointer to whatever `str` is pointing to.

::: warning WARNING

When the pointer initialized by this function is used as an argument to `void mln_string_free(mln_string_t *str)`, it does not free the object pointed to.

:::

### Prototype

```c
mln_string_t *mln_string_refDup(mln_string_t *str);
```

### Parameters

* `str`: Pointer to a `mln_string_t`.

### Return Value

* `!NULL`: A pointer to `*str`.

## `mln_string_refConstDup`

Returns a pointer to whatever `s` is pointing to.

::: warning WARNING

When the pointer created by this function is used as an argument to `void mln_string_free(mln_string_t *str)`, it does not free the object pointed to.

:::

### Prototype

```c
mln_string_t *mln_string_refConstDup(char *s);
```

### Parameters

* `str`: Pointer to a C-style string.

### Return Value

* `!NULL`: A pointer to `*str`.

## `mln_string_free`

It is used to free `mln_string_t`.

::: warning WARNING

If 'str' is initialized by mln_string_refDup() or mln_string_refConstDup(), the string contents will be freed at the same time.

:::

### Prototype

```c
void mln_string_free(mln_string_t *str);
```

### Parameters

* `str`: Pointer to a C-style string.

### Return Value

* `!NULL`: A pointer to `*str`.

## `mln_string_strcmpSeq`

不知道干啥的

### Prototype

```c
int mln_string_strcmpSeq(mln_string_t *s1, mln_string_t *s2);
```

### Parameters

* `s1`: Pointer to a `mln_string_t`.
* `s2`: Pointer to a `mln_string_t`.

### Return Value

* `-1`: 
* `0`: 
* `1`: 

## `mln_string_strcmp`

Same behavior as C standard library function `int strcmp(const char *s1,const char *s2);`.

### Prototype

```c
int mln_string_strcmp(mln_string_t *s1, mln_string_t *s2);
```

## `mln_string_constStrcmp`

Same behavior as C standard library function `int strcmp(const char *s1,const char *s2);`.

### Prototype

```c
int mln_string_constStrcmp(mln_string_t *s1, const char *s2);
```

## `mln_string_strncmp`

Same behavior as C standard library function `int strncmp(const char *str1, const char *str2, size_t n)`.

### Prototype

```c
int mln_string_strncmp(mln_string_t *s1, mln_string_t *s2, mln_u32_t n);
```

## `mln_string_constStrncmp`

Same behavior as C standard library function `int strncmp(const char *str1, const char *str2, size_t n)`.

### Prototype

```c
int mln_string_constStrncmp(mln_string_t *s1, const char *s2, mln_u32_t n);
```

## `mln_string_strcasecmp`

Same behavior as `int strcasecmp (const char *s1, const char *s2)` on Linux.

### Prototype

```c
int mln_string_strcasecmp(mln_string_t *s1, mln_string_t *s2);
```

## `mln_string_constStrcasecmp`

Same behavior as `int strcasecmp (const char *s1, const char *s2)` on Linux.

### Prototype

```c
int mln_string_constStrcasecmp(mln_string_t *s1, const char *s2);
```

## `mln_string_constStrncasecmp`

Same behavior as `int strncasecmp(const char *s1, const char *s2, size_t n)` on Linux.

### Prototype

```c
int mln_string_constStrncasecmp(mln_string_t *s1, const char *s2, mln_u32_t n); 
```

## `mln_string_strncasecmp`

Same behavior as `int strncasecmp(const char *s1, const char *s2, size_t n)` on Linux.

### Prototype

```c
int mln_string_strncasecmp(mln_string_t *s1, mln_string_t *s2, mln_u32_t n);
```

## `mln_string_strstr`

Same behavior as C standard library function `char *strstr(char *str1, const char *str2)`.

### Prototype

```c
char *mln_string_strstr(mln_string_t *text, mln_string_t *pattern);
```

## `mln_string_constStrstr`

Same behavior as C standard library function `char *strstr(char *str1, const char *str2)`.

### Prototype

```c
char *mln_string_constStrstr(mln_string_t *text, const char *pattern);
```