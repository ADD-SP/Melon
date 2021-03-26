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

* `s`: Pointer to a string.

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

