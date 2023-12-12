[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# Git and Github

## Objectives

- Manage changes in a project over time.
- Collaborate over time and space with other developers on the same project.
- Fork a remote repository to get your own remote copy.
- Clone a remote repository to get your own local copy.
- Synchronize local and remote repositories.

## Prerequisites

- [Git Basics](https://git.generalassemb.ly/ga-wdi-boston/git)

## Overview

Continuing with what we started [Git Basics](https://git.generalassemb.ly/ga-wdi-boston/git),
we are going to use Github to manage our project.

## Demo: Linking with GitHub

So we have a local repository. Watch as I create a Git Enterprise repository. Why
Git Enterprise? So we can backup our code online. It also provides us with a useful
graphical interface and useful collaboration features.

## Lab: Creating & Pushing

Now create your own Git Enterprise repository:

- Name the repository `game-of-gits-<your name>`
- Set repo to `Public`
- _Do Not_ check the box asking to initialize with a new README

Your Create New Repository screen will look like:

![github-create-repo](https://i.imgur.com/KtNn3ca.png)

Push your master branch with the command `git push origin master`.

The last time we saw Ned Stark, we had just written his fate.  Below his story
write the beginning of another character's story.  For instance:

> Joffrey Baratheon was the one to do Ned in, but his story was only about to
> begin, and let me assure you he will ___DEFINITELY NOT DIE!___

Push the changes you made.

Also, push your `dream-story` branch.  We pushed our `master` branch with the
command `git push origin master`.  Can you figure out how to push our
`dream-story` branch?

## Demo: Adding to Your Story

Watch as I `fork` and `clone` one of your repos and make an addition by
creating a `pull request`.

## Lab: Adding to Other's Stories

Working with a partner, follow my example and take turns adding to one
another's stories. Accept each other's pull requests. After you've each gone
once, stop.

## Pulling: Updating Your Local

Each of you should now have updated code on Git Enterprise, but your local Git repo
will be behind.  We need to get the latest code off of Git Enterprise.  We can do this
by pulling the changes that we merged.  The command to do this is:

`git pull origin master`

This gets the latest copy of our code off of the master branch of our original
repository.

## Editing on Git Enterprise

Hey! See that little pencil button on the top of a page on Git Enterprise!? That looks
like it's used to change the text and will help us, right?!

![Edit Pencil](https://i.imgur.com/Drt2g9u.png)

Wrong! DON'T EVER USE THAT! Regardless of how small the changes are, you never
want to edit ON Git Enterprise. You always want to make changes locally and push them.

The reason we never want to do that is if you edit in the cloud, our local repo
and Git Enterprise repo become out of sync and it breaks convention.

## Additional Resources

- [Git Commands](command-reference.md)
- [Git & GitHub Diagram](https://git.generalassemb.ly/storage/user/3667/files/c2df43ec-da6e-11e7-9187-a5df8d4e74f7)
- [Github's fork page](https://help.github.com/articles/fork-a-repo/)
- [An Introduction to Git and GitHub by CS50](https://www.youtube.com/watch?v=MJUJ4wbFm_A)

## [License](LICENSE)

1. All content is licensed under a CC­BY­NC­SA 4.0 license.
1. All software code is licensed under GNU GPLv3. For commercial use or
    alternative licensing, please contact legal@ga.co.
