var args = arguments[0] || {};

// this is setting the view elements of the row view
// based on the arguments passed into the controller
$.image.image = args.image;
$.titleLabel.text = args.title || '';
