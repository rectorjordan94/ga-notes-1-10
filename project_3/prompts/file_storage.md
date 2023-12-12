
## File Storage

### Pitch

Build an app that allows users to upload files onto a
virtual file system. Ordinary users can only read/download an file where as
Owners can do anything to the files they own.

### MVP User Stories

- As an unregistered user, I would like to sign up with email and password.
- As a registered user, I would like to sign in with email and password.
- As a signed in user, I would like to change password.
- As a signed in user, I would like to sign out.
- As a signed in user, I would like to upload a file to AWS with a name.
- As a signed in user, I would like to update the name of my file on AWS.
- As a signed in user, I would like to see the all my uploaded files on AWS.
- As a signed in user, I would like to see the preview of all files on AWS.
- As a signed in user, I would like to delete the reference of my file from the
  database.
- As a signed in user, I would like to see the following data for any file:
  - date created/uploaded
  - date modified
  - owner (user who uploaded the file)
  - name

#### File Upload with AWS S3

1.  [AWS S3 Setup Guide Repository](https://git.generalassemb.ly/sei-ec-remote/aws-s3-setup-guide) 
2.  [Client Example Code](https://git.generalassemb.ly/sei-ec-remote/c2c-image-upload-client/tree/c2c-training)
3.  [API Example Code](https://git.generalassemb.ly/sei-ec-remote/c2c-image-upload-api/tree/training)

### Reach Goal(s)

- Add folders so users can organizer their files
- "collaborators" can be chosen; they have permission to read from and write to
  files.
- As a signed in user, I would like to download files from AWS.
