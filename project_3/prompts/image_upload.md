
## Image Upload

### Pitch

Build an app that allows users to upload images onto a
virtual file system. Ordinary users can only read/download an image where as
Owners can do anything to the images they own.

### MVP User Stories

- As an unregistered user, I would like to sign up with email and password.
- As a registered user, I would like to sign in with email and password.
- As a signed in user, I would like to change password.
- As a signed in user, I would like to sign out.
- As a signed in user, I would like to upload an image to AWS with a name
- As a signed in user, I would like to update the nameof my image on AWS.
- As a signed in user, I would like to see all my images on AWS.
- As a signed in user, I would like to see the thumbnail of all images on AWS.
- As a signed in user, I would like to delete the reference of my image from the
  database.
- As a signed in user, I would like to see the following data for any image:
  - date created/uploaded
  - date modified
  - owner (user who uploaded the image)
  - name

#### File Upload with AWS S3

1.  [AWS S3 Setup Guide Repository](https://git.generalassemb.ly/ga-wdi-boston/aws-s3-setup-guide) 
2.  [File Upload Video Codealong](https://generalassembly.zoom.us/rec/share/7sV8K6z0_FFJX8_1-HrBe7YkH7r8T6a8gSZI8_UPzNK4BYVEO7A6XhFbwHpsp_Y)
3.  [Client Example Code](https://git.generalassemb.ly/eron-salling/c2c-image-upload-client/tree/training)
4.  [API Example Code](https://git.generalassemb.ly/eron-salling/c2c-image-upload-api/tree/training)

### Reach Goal(s)

- "collaborators" can be chosen; they have permission to read from and write to
  images.
- As a signed in user, I would like to download images from AWS.