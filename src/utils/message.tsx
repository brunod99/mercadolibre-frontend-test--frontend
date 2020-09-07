import Swal from "sweetalert2";

const Message = (
  icon: "success" | "error" | "warning",
  title: string | undefined,
  text: string | undefined,
  onClose?: () => unknown,
  extra?: {}
) => {
  const defaultParams = {
    icon,
    title,
    text,
  };

  const result = Object.assign(defaultParams, extra);

  return Swal.fire(result).then((result) => {
    if (onClose) {
      if (result.value) {
        onClose();
      }
    }
  });
};

export default Message;
