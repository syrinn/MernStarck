import toastr from "toastr";

class Message {
  static Succes(message) {
    return toastr.success(message);
  }

  static Error(message) {
    return toastr.error(message);
  }
}

export default Message;
