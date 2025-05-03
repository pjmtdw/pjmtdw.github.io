---
title: Neovim plugin I am using
description: Introduction to the Plugin I Am Currently Using
pubDate: May 03, 2025
---

## Policy

I carefully choose which Neovim plugins to use. When a plugin is small, I sometimes write the Lua code myself. Since I usually work in the terminal, I don't try to do everything in Neovim; I use small scripts in Bash or Python instead. Even so, I currently use 18 plugins, so let me introduce them.

## Basic plugins

- [lazy.nvim](https://github.com/folke/lazy.nvim) ... Plugin manager. I previously used [vim-plug](https://github.com/junegunn/vim-plug), [packer.nvim](https://github.com/wbthomason/packer.nvim), [dein.vim](https://github.com/Shougo/dein.vim), but now I use this.
- [kanagawa.nvim](https://github.com/rebelot/kanagawa.nvim) ... Dark color theme. Other popular ones are [catppuccin](https://github.com/catppuccin/nvim), [tokyonight.nvim](https://github.com/folke/tokyonight.nvim), and [gruvbox-material](https://github.com/sainnhe/gruvbox-material).
- [rcsvers.vim](https://github.com/vim-scripts/rcsvers.vim) ... This uses an ancient version control system called [RCS](https://www.gnu.org/software/rcs/). Whenever I edit a file in Neovim, all the revisions are backed up in `~/.vim.d/bkup/`.
- [blink.cmp](https://github.com/Saghen/blink.cmp) ... Completion plugin that automatically shows pop-ups for completing from LSP, snippets, paths, and buffers. Another choice is [nvim-cmp](https://github.com/hrsh7th/nvim-cmp).
- [flash.nvim](https://github.com/folke/flash.nvim) ... This helps you move the cursor with a few keystrokes. It also has Treesitter integration, which selects the range of code in visual mode; e.g., select the whole function.
- [lualine.nvim](https://github.com/nvim-lualine/lualine.nvim) ... The plugin to manage the status line at the bottom.
- [nvim-bqf](https://github.com/kevinhwang91/nvim-bqf) ... This plugin makes QuickFix more usable by adding previews.
- [snacks.nvim](https://github.com/folke/snacks.nvim) ... This is a collection of plugins that raise the QoS. This includes a picker, which can be a substitute for [Telescope.nvim](https://github.com/nvim-telescope/telescope.nvim) or [fzf-lua](https://github.com/ibhagwan/fzf-lua).

## Coding

- [nvim-treesitter](https://github.com/nvim-treesitter/nvim-treesitter) ... Built-in Neovim uses regular expressions for highlighting and indenting code, but this uses more advanced parser called Treesitter.
- [nvim-lspconfig](https://github.com/neovim/nvim-lspconfig) ... As of Neovim 0.11, you can use the LSP server more conveniently; however, you still need this because lots of LSP servers need their ad-hoc settings.
- [roslyn.nvim](https://github.com/jmederosalvarado/roslyn.nvim) ... Uses [Roslyn](https://github.com/dotnet/roslyn) as a C# LSP. You need this because Roslyn uses a non-usual setup that cannot be done with the built-in LSP of Neovim.
- [none-ls.nvim](https://github.com/nvimtools/none-ls.nvim) ... Use external commands such as `stylua` or `fish_indent` as LSP. Some LSP servers, such as Pyright, lack code formatting. In that case, you can use this plugin to use a formatter as LSP.

## Debugging

I don't use an interactive debugger frequently, but setting these up might be useful. `nvim-dap-go` provides configurations for Go.

For Rust, most popular plugin is [rustaceanvim](https://github.com/mrcjkb/rustaceanvim), but I wrote [my own config](https://github.com/pjmtdw/neovim-config/blob/c222b42699264ae4a23b4b91d14a3f2fadf0220f/lua/dap-conf.lua#L52), which parses the output of `cargo build -q`.

- [nvim-dap](https://github.com/mfussenegger/nvim-dap)
- [nvim-dap-go](https://github.com/leoluz/nvim-dap-go)
- [nvim-dap-ui](https://github.com/rcarriga/nvim-dap-ui)

## Required as dependencies

These are required as dependencies for the above plugins.

- [plenary.nvim](https://github.com/nvim-lua/plenary.nvim)
- [nvim-web-devicons](https://github.com/nvim-tree/nvim-web-devicons)
- [nvim-nio](https://github.com/nvim-neotest/nvim-nio)

## Plugins I don't use, but may be useful

- [mason.nvim](https://github.com/williamboman/mason.nvim) ... I prefer installing the LSP server with package managers such as `pacman` in Arch or `homebrew` in macOS, but if you want to manage those in Neovim, this is your choice.
- [nvim-treesitter-textobjects](https://github.com/nvim-treesitter/nvim-treesitter-textobjects) ... I think the Treesitter integration of flash.nvim is enough, but if you want to do more advanced queries, use this.
- [nvim-treesitter-context](https://github.com/nvim-treesitter/nvim-treesitter-context) ... When the function or class is long, it shows the signature at the top of the buffer. I don't use this because long functions are evil, but if you need to work with those evil codebases, use this.
- [fugitive](https://github.com/tpope/vim-fugitive), [neogit](https://github.com/NeogitOrg/neogit), [gitsigns.nvim](https://github.com/lewis6991/gitsigns.nvim), [Diffview.nvim](https://github.com/sindrets/diffview.nvim) ... I prefer CLI `git` command, but these may be useful when you want use git in Neovim.
- [trouble.nvim](https://github.com/folke/trouble.nvim) ... Shows diagnostics more beautifully.

## Conclusion

[This](https://github.com/pjmtdw/neovim-config) is my Neovim config. If you are interested, please take a look.
