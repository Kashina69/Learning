# 🧠 Vim Editing & Navigation Notes (Combined Cheat Sheet)

---

## WORD & TEXT NAVIGATION

- `w` – jump to start of next word
- `e` – jump to end of current/next word
- `b` – jump to start of previous word
- `W` / `E` / `B` – like above, but treats symbols (like \_) as part of the WORD
- `3w` – jump 3 words forward
- `2b` – jump 2 words backward
- Example:
  ```vim
  3w           jump 3 words forward
  2B           jump 2 WORDS backward
  ```
- For `user_name-id`:
  - `w` stops at `_` and `-`
  - `W` treats whole thing as one WORD

---

## LINE POSITION

- `0` – start of line (absolute)
- `^` – first non-whitespace character
- `$` – end of line

---

## PRECISE JUMPS

- `f{char}` – jump to char
- `t{char}` – jump before char
- `F{char}` – jump backward to char
- `T{char}` – jump backward to before char
- `2f.` – jump to 2nd dot
- `f(` – jump to function args
- Example:
  ```vim
  f(           jump to function args
  2f.          jump to 2nd dot
  ```

---

## SEARCH & NAVIGATION

- `/pattern` – forward search
- `?pattern` – backward search
- `n` – next match
- `N` – previous match
- Example: `/getUserData`

---

## JUMP HISTORY

- `Ctrl-o` – go back in cursor movement
- `Ctrl-i` – go forward in cursor movement

---

## DELETE OPERATIONS

- `dd` – delete line
- `dw` – delete word forward
- `db` – delete word backward
- `de` – delete to word end
- `diw` – delete inner word
- Example:
  ```vim
  di(          delete inside parentheses
  di"          delete inside quotes
  ```

---

## CHANGE / RENAME

- `ciw` – change inner word (rename variable, cursor anywhere in word)
  - c → change; iw → inner word
  - 💡 **Rename variable:** cursor anywhere → `ciw` → type new name.
  - Example: `ciw` on `userName`
- `cw` – change from cursor to word end (quick replace)
- `cc` – change whole line
- `ciW` – change inner WORD (for snake-case, kebab-case)
- Example:
  ```vim
  ci(          change inside parentheses
  cw           change from cursor to word end
  ciW          change inner WORD
  ```

---

## TEXT OBJECTS

- `iw` – inner word
- `aw` – a word
- `i(`/`i{`/`i[` – inside brackets
- `a(`/`a{`/`a[` – including brackets
- `i"`/`i'` – inside quotes
- `va"` – select quoted string

---

## VISUAL MODE & OPERATE

- `v` – character selection
- `V` – line selection
- `Ctrl-v` – block selection
- Then:
  - `d` – delete
  - `c` – change
  - `y` – yank

---

## COPY & PASTE

- `yy` – yank (copy) line
- `yw` – yank word
- `p` – paste after
- `P` – paste before

---

## UNDO / REDO

- `u` – undo
- `Ctrl-r` – redo

---

## SEARCH & REPLACE (FILE-WIDE)

- `:%s/old/new/g` – replace all
- `:%s/old/new/gc` – confirm each
- 💡 Refactor hammer: rename everywhere!

---

## WINDOW NAVIGATION

- `Ctrl-w s` – horizontal split
- `Ctrl-w v` – vertical split
- `Ctrl-w w` – switch window
- `Ctrl-w q` – close window

---

## ESSENTIAL QUALITY-OF-LIFE

- `.` – repeat last command
- `zz` – center cursor
- `:set nu` – line numbers
- `:set rnu` – relative numbers

---

## GOLDEN COMBOS

```vim
ciw       rename variable
f(        jump to function args
di{       clear block
va"       select quoted string
Ctrl-o    jump back
.         repeat last edit
```

---

## THINK LIKE A VIM PRO

❌ “Move cursor → delete”  
✅ **Delete inner word:** `diw`

❌ “Select text → edit”  
✅ **Change inside object:** `ci(`

---

## NEXT-LEVEL / LSP

- `gd` – go to definition
- `gr` – list references
- `K` – hover docs

---

## PRACTICE LINE

```js
const user_name = getUserData(id);
```

Try on it:

- `ciW` on `user_name`
- `ci(` inside function
- `/getUserData`
- `Ctrl-o`

# My ~/.vimrc file

```.vimrc
" Core

set nocompatible
syntax on
set encoding=utf-8
set smartindent autoindent cindent

" Line Number
set number
set relativenumber

" Indentation
set tabstop=4
set shiftwidth=4
set expandtab
set smartindent

" Search
set ignorecase
set smartcase
set incsearch
set hlsearch

" Completion
filetype plugin on
filetype indent on
autocmd FileType python setlocal omnifunc=syntaxcomplete#Complete


```
