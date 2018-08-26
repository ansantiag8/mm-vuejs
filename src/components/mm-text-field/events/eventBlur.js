export default function (event) {
  const { target } = event;

  this.classInput.mmInputNotEmpty = target.value !== '';
  this.classInput.mmInputError = this.required && !target.value;
}
