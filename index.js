// We want to preview images, so we register
// the Image Preview plugin, We also register 
// exif orientation (to correct mobile image
// orientation) and size validation, to prevent
// large files from being added
FilePond.registerPlugin(
    FilePondPluginImagePreview,
    FilePondPluginImageExifOrientation,
    FilePondPluginFileValidateSize,
    FilePondPluginImageEdit
  );
  
  // Select the file input and use 
  // create() to turn it into a pond
  const pond = FilePond.create(
    document.querySelector('input')
  );
  
  // How to use with Pintura Image Editor:
  // https://pqina.nl/pintura/docs/latest/getting-started/installation/filepond/


  var recentFile = pond.getFile();

