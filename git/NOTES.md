# Notes

## Intro: Version Control

- A good intro to version control may be explaining how things would be done
  without version control.
  - For example, working on a project in a word document posing these questions:
    - What if someone wanted to make changes to the same document?
    - How would you know that it was changed?
    - How could you collaborate with one or more people?

    These questions can be a good segue into why version control is so useful.

- Go over definition of "version control", and why you should care:
  - Version control is a system that records changes to a file or set of files
    over time so that you can recall specific versions later.
    > "For the examples in this book you will use software source code as the
    > files being version controlled, though in reality you can do this with
    > nearly any type of file on a computer."
    > -- from [Getting-Started-About-Version-Control](https://git-scm.com/book/en/v2/Getting-Started-About-Version-Control)

### Helpful Analogies

- Think about git history like Hansel and Gretle's breadcrumbs:
  - IF they had just left a sandwich in the middle of the woods, it wouldn't
    have been very helpful at all.
  - However, the trail of breadcrumbs allows
    someone else to figure out exactly what their trail was, and saved them from
    getting horribly murdered by that crazy old woman.

### `git commit -m`

- There is a section in the README that says [Do Not Use git commit -m](README.md/#do-not-use-git-commit--m-message)
- Explain the downfalls of having non detailed commit messages and why the above
  command would not be useful in a production environment.
  - For example, if you had a one line commit, other devs on your team / you in
    a few months may not remember what was done in the commit.
    - This leads to wasting time investigating differences in code.
    - This could be avoided by making detailed commit messages.
    - They will save time and help everyone on your team now and in the future.

### `git status`

- Remember to frequently run `git status` after making changes during demo and
  code alongs.
- Important that developers get in this habit early on.
- There is a [section](README.md/#code-along-staging-and-commiting) in the
  README describing `modified`, `staged` and `committed`, but it is also
  helpful for these types of files at different points throughout the training.

### `git` Diagram

![](https://git.generalassemb.ly/storage/user/5693/files/f8b305ea-0047-11e8-9b26-ce9ceed31a98)
