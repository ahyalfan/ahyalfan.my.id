const sendMessage = () => {
    try {
        const url = import.meta.env.VITE_TELEGRAM_BOT_URL
        const message = `user %20 view %20 Your %20`
      const request = new Request(
        `${url}&text=${message}`,
        {
          method: 'GET',
        }
      );
      const response = fetch(request);
    } catch (e) {
      console.log(e.message);
    }
  };
  
  export default sendMessage;