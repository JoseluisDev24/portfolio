const WhatsAppButton = () => {
  const phoneNumber = "59892171503";
  const message = encodeURIComponent("¡Hola! Me gustaría que tengamos una entrevista.");

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <img className="w-12 sm:w-14 hover:scale-110" src="../whatsappfooter.png" alt="icono de whatsapp" />
    </a>
  );
};

export default WhatsAppButton;
