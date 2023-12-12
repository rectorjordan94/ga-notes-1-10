[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# Git Basics

Git is an essential tool for developers.  It's used almost universally
these days in the world of open source and at most organizations.

## Prerequisites

- SEI Fundamentals

## Objectives

- Initialize a git repository in order to track changes.
- Create a new branch to isolate your changes.
- Place new or changed files into the staging area to prepare them for a
  commit.
- Remove files from the staging area before a commit.
- Commit new and changed files to a git repository.

## Why Git

Version control! As developers our code is our livelihood so it's important
that we safely store our work... frequently.  Not only that, we also want to
track our changes as we make them.  If we make a feature that ends up breaking
the rest of our app we want to be able to go back to a point when our app was
last working.

## Code Along: Making a Local Repository

Let's initialize a local repository.

1. In your trainings directory, `~/sei/trainings`, create a
    subdirectory called `<your-name>s-game-of-gits`. So if your name is Kyrie,
    it should be called `kyries-game-of-gits`.

1. Inside of the `<your-name>s-game-of-gits` directory create a file called `sad-tale.md`.

1. Open the file with VS Code and copy in the following lines:

  ```text
  House Stark of Winterfell is led by the just Eddard "Ned" Stark, Lord of
  Winterfell, Warden of the North, Hand of the King, Protector of the Realm,
  Regent.  He is surely honorable and will lead a long and prosperous life.
  ```

4. Save the file.

1. Inside of the `<your-name>s-game-of-gits` directory type `git status`. Did anything
   happen?

1. Again, inside the `<your-name>s-game-of-gits` directory type `git init`.

1. Type `git status` again. Did anything happen this time?

## Code Along: Staging and Commiting

Using `git add <name-of-file>` we are going to add our story to the staging
area.

There are 3 states that your file can reside in `modified`, `staged`, and
`committed`.  These states map to the different sections of a Git project.

- Modified means that you have changed the file but have not committed it to
  your git repository yet.
- Staged means that you have marked a modified file in its current version
  to go into your next commit snapshot.
- Committed means that the data is safely stored in your local git repository.

[Git Basics](https://git-scm.com/book/en/v2/Getting-Started-Git-Basics)

![Git Sections](https://git-scm.com/book/en/v2/book/01-introduction/images/areas.png)

When we add a file we are moving it from the working directory to the staging
area.

Now that our file is staged let's commit our file by typing `git commit`, VS Code
should open.

## Lab: Crafting A Commit

Skim the following blog post and carefully think about what a good commit
message would be. Take some time to come up with your own. Be ready to share
your commit with the rest of the class.

- [How to Write a Git Commit Message](https://chris.beams.io/posts/git-commit/)

Now that we've made our first commit, let's see what happens when we type `git
log`... We see our previous commit! This typically shows all of our previous
commits, but since we just have one, that's all we see. Feel free to play around
with options for `git log`, like `--oneline`, `--name-status`, and `--relative-date`
for example. For all options [click here.](https://git-scm.com/docs/git-log)

## Staging: And He Lived Happily After

Together, let's continue our story.

In our `sad-tale.md`, we'll tell the rest of Ned Stark's story.  Copy the text
below and paste it after the current contents of our story and save it:

```text
Ned Stark went to King's landing where he made lots of friends and lived
happily ever after...  He definitely didn't get axe murdered.
```

Now using what we learned earlier stage this change. To figure out the status
of your files you can type `git status` in the terminal at any time.

> ### :triangular_flag_on_post: Remember: Staging isn't committing

## Unstaging: Maybe We Jumped the Gun

Sadly for Ned, it turns out he actually did get axe murdered,
so we probably want to unstage our file.

Unstage the file with `git reset <filename>`

Delete the last thing we wrote in `sad-tale.md`.

## Removing: Deleting Staged Files

Let's practice removing files after they have been staged.

### Using The Bash `rm` Command

1. Inside of `<your-name>s-game-of-gits` create a file called `the-stark-bunch.md`.

1. Open the file with VS Code and copy in the following lines:

  ```text
  This is a story... of a man named Neddy... and three very badass really
  awesome girls
  ```

3. Save the file.

1. `git add the-stark-bunch.md`.

1. `rm the-stark-bunch.md`.

1. `git status`

What do you see? The addition of `the-stark-bunch.md` is still staged as
a `new file` type change, however, there is an unstaged `deleted` type change.
You have to run an additional command to unstage the `new file` change.

7. `git reset -- the-stark-bunch.md`.

### Using The `git rm` Command

1. Inside of `<your-name>s-game-of-gits` create a file called `the-stark-bunch.md`.

1. Open the file with VS Code and copy in the following lines:

  ```text
  This is a story... of a man named Neddy... and three very badass really
  awesome girls
  ```

3. Save the file.

1. `git add the-stark-bunch.md`.

1. `git rm -f the-stark-bunch.md`.

1. `git status`

What's the difference between `git rm` and `rm`?
What is actually happening with the `git rm` command?

## Branching: Multiple Stories, One Main Plot

Looking back, we know that Ned's story doesn't have a happy ending but let's
dream big.  We're going to create a dream-story branch and write what we would
have wanted to happen.

Similar to having one main story and various sub-plots -- a branch lets us
effectively duplicate and section off the code we have written thus far, make
alterations to it, and if we would like at some point we can join it back to the
main branch (typically called `master`).

Create a branch called `dream-story` by typing `git branch dream-story`.
_You can see all your current branches at any time by typing `git branch`._

Now that we've created our branch, in order to use it we have to switch to it.
We can do this with the command `git checkout <branch-name>`.

>You can also create _and_ checkout to a branch at the same time by using the
>`-b` flag! (`git checkout -b dream-story`)

## Lab: Branching Your Dreams

1. Switch to your `dream-story` branch and write a brief description of what
   you would have wanted to happen to Ned.

1. Save the file, Stage and commit your changes.

1. Switch back to your `master` branch. (Notice anything?) Add what really
   happened to Ned.

1. Stage and commit your changes.

(Be ready to talk about any issues you many have encountered or strange things
you may have noticed).

## Git Workflow Checklist

- [ ] `git status` to confirm clean working directory
- [ ] confirm branch is correct
- [ ] make changes to `file`
- [ ] `git add 'file'`
- [ ] `git status` (to confirm modified files have been staged)
- [ ] `git commit`
- [ ] `git log` (to verify your last commit worked)

## Git Best Practices

- ADD files explicitly. If you have multiple files, use full paths to refer to
  each. Example: `git add foo/bar.md baz/qux.js`
- AVOID `git add .` unless you have just initialized a new repo and need to
  stage all the files
- ALWAYS use `git status` before any other command
- NO commit is too small
- NO commit message is too long
- NEVER nest repositories

## Additional Resources

- [Git Commands Cheatsheet](command-reference.md)
- [Learn Version Control with Git](http://www.git-tower.com/learn/git/ebook)
- [Visualizing Git Commands](https://onlywei.github.io/explain-git-with-d3/)
- [Learn Git Branching](http://pcottle.github.io/learnGitBranching/)
- [Github Git Cheat Sheet](https://education.github.com/git-cheat-sheet-education.pdf)

## [License](LICENSE)

1. All content is licensed under a CC­BY­NC­SA 4.0 license.
1. All software code is licensed under GNU GPLv3. For commercial use or
   alternative licensing, please contact legal@ga.co.
