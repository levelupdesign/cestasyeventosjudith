export const PHONE = "+34648216201";
export const PHONE_DISPLAY = "648 216 201";
export const EMAIL = "judithponce.contact@gmail.com";
export const LINKEDIN = "https://www.linkedin.com/in/judithponcealmansa";
export const LOCATION = "Málaga (29010)";

export const waLink = (
  msg = "Hola Judith, he visto tu web y me gustaría pedir información 😊",
) => `https://wa.me/${PHONE.replace(/^\+/, "")}?text=${encodeURIComponent(msg)}`;
