export default function(res, errors) {
  res.errors.forEach(function(error) {
    var attribute = error.source.pointer.split('/')[3];

    // Adding stuff to the errors array that's passed in by reference,
    // so due to data-binding (I think), the controller's error properties
    // do get updated and reflected in the browser
    errors.add(attribute, error.detail);
  });
}