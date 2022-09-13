import * as yup from "yup";

export const schema = yup.object({
  name: yup.string().required("업체명을 입력해주세요"),
  open: yup.string().required("오픈시간을 입력해주세요"),
  close: yup.string().required("마감시간을 입력해주세요"),
  phone: yup.string().required("전화번호를 입력해주세요"),
  description: yup.string().required("가게정보를 입력해주세요"),
  address: yup.string().required("주소를 입력해주세요"),
  entranceFee: yup
    .number()
    .typeError("값(숫자)을 입력해주세요")
    .required("입장료를 입력해주세요"),
});
