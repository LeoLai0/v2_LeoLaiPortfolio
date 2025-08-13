import { useState } from "react";

export const ContactDiv = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.currentTarget);

    formData.append("access_key", "91a9dd82-1a04-4e11-9ea1-0fbbe9ae3f8b");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.currentTarget.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="font-light text-zinc-500 text-[.9rem] tracking-[0.5px] p-6 pb-0">
        <form onSubmit={onSubmit} className="flex flex-col w-full gap-2">
          <input type="hidden" name="access_key" value="91a9dd82-1a04-4e11-9ea1-0fbbe9ae3f8b"/>
          <input className="border-1 border-white p-1 focus:outline-none autofill-no-bg text-white" type="text" name="name" placeholder="Name" required/>
          <input className="border-1 border-white p-1 focus:outline-none autofill-no-bg text-white" type="email" name="email" placeholder="Email Address" required/>
          <textarea className="border-1 border-white p-1 focus:outline-none autofill-no-bg text-white" name="message" placeholder="Your Message" rows={10} required/>
          <input type="checkbox" name="botcheck" className="hidden" style={{ display: "none" }}/>
          <button className="w-full border-1 border-white text-[0.7rem] py-1 px-2 rounded-sm p-1 hover:bg-white/5" type="submit">Send</button>
          <span style={{ fontSize: ".7rem" }}>{result}</span>
        </form>
    </div>
  );
}