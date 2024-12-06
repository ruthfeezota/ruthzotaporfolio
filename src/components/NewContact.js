import { useEffect, useState } from 'react';
import Star from '../assets/star.svg'
import Man from '../assets/Business-man.jpg'
import AOS from "aos";
import "aos/dist/aos.css";
import { db } from "../firebase";

function NewContact() {
    useEffect(() => {
        AOS.init({duration:1200})
      })



  const [email, setEmail] = useState("");
	const [name, setName] = useState("");
	const [bname, setBname] = useState("");
	const [message, setMessage] = useState("");
	const [number, setNumber] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();

		db.collection("contact")
			.add({
				email: email,
				name: name,
				bname: bname,
				message: message,
				number: number,
			})

			.then(() => {
				alert("Form has be submitted 👍");
			})
			.catch((error) => {
				alert(error.message);
			});

		setEmail("");
		setName("");
		setBname("");
		setMessage("");
		setNumber("");
	};

  return (

<div class="py-24 md:py-24 lg:py-28 mx-auto w-full max-w-7xl px-5 md:px-10 bg-[#CBC7C1] questrial-regular uppercase" data-aos="fade-up-left">
  <div class="grid items-center max-[991px]:justify-items-start grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-20" data-aos="fade-up-left">
    <div class="flex flex-col items-start max-[991px]:max-w-[720px]">
      <h2 class="text-3xl font-extrabold sm:text-4xl text-black">Let's build something exciting together!</h2>
      <div class="ml-0 mr-0 mt-4 max-w-[528px] mb-5 md:mb-6 lg:mb-8 pb-4">
        <p class="text-black"></p>
      </div>
      <div class="mb-4 flex items-center max-[991px]:mb-px py-4">
        <img src={Star} alt="" class="inline-block mr-1 w-5 pl-0 "/>

        <img src={Star} alt="" class="inline-block mr-1 w-5 pl-0"/>
        <img src={Star} alt="" class="inline-block mr-1 w-5 pl-0"/>
        <img src={Star} alt="" class="inline-block mr-1 w-5 pl-0"/>
        <img src={Star} alt="" class="inline-block mr-1 w-5 pl-0"/>
      </div>
      <div class="mb-8 max-w-[480px]">
        <p class="text-black">Ruth have done an Amazing job with helping my business get it's digital strategy where it need to be! She have helped us get Google ranking. She analyze, do their Research, & provide Excellent Results... I would recommend Ruth to anyone who is in need of help with their small business website, marketing and sales funnel. Thanks so much Ruth, I look forward to continue working with you for years to come.</p>
      </div>
      <div class="flex flex-row items-start">
        <img src={Man} alt="" class="inline-block h-16 w-16 object-cover mr-4"/>
        <div class="flex flex-col items-start">
          <h6 class="text-base font-bold text-black">Melvin Warren</h6>
          <p class="text-sm text-[#636262]">Hope Active</p>
        </div>
      </div>
    </div>
    <div class="mx-auto max-w-[608px] bg-[#CBC7C1] border-2 border-black px-8 max-[991px]:ml-0 max-[991px]:mr-0 pt-[2em] pb-8" data-aos="fade-up-right">
      <div class="text-center">
        <h3 class="font-extrabold text-1xl md:text-3xl text-black">New Project Request</h3>
        <div class="mx-auto mt-4 max-w-[480px] mb-5 md:mb-6 lg:mb-8">
          <div class="text-sm text-black">Interested in creating a new custom coded website or application with React or Angular? Reach out to me today and let's bring your ideas to life!</div>
        </div>
        <div class="mx-auto w-full max-w-[400px]">
          <div class="mx-auto max-w-[400px] text-left mb-4">

            <form  onSubmit={handleSubmit}
						className="space-y-5"

            name="wf-form-password"
            method="get">
              <div class="relative">
                <label for="name-2" class="mb-1 font-medium text-black">Full Name</label>
                <input
                type="text"
								onChange={(e) => setName(e.target.value)}
								required
								value={name}
                class="m-0 mb-4 block w-full bg-[#CBC7C1] border-2 text-black border-black align-middle focus:border-[#E4A4BD] text-sm px-3 h-9 py-6 pl-4 uppercase" maxlength="256" name="name-2" placeholder="your name" required/>
              </div>

              <div class="relative mb-2 text-black">
                <label for="name-2" class="mb-1 font-medium">Business Name</label>
                <input
                type="bname"
								onChange={(e) => setBname(e.target.value)}
								required
								value={bname} 
                class="m-0 mb-4 block w-full bg-[#CBC7C1] border-2 text-white align-middle  border-black focus:border-[#E4A4BD] text-sm px-3 h-9 py-6 pl-4 uppercase" maxlength="256" name="name-2" placeholder="business name"/>
              </div>

              <div class="relative mb-2 text-black">
                <label for="name-2" class="mb-1 font-medium">Business Email</label>
                <input type="email"
								onChange={(e) => setEmail(e.target.value)}
								required
								value={email}
                class="m-0 mb-4 block w-full bg-[#CBC7C1] border-2 text-black border-black align-middle focus:border-[#E4A4BD] text-sm px-3 h-9 py-6 pl-4 uppercase" maxlength="256" name="name-2" placeholder="email@business.com" />
              </div>

              <div class="relative mb-2 text-black">
                <label for="name-2" class="mb-1 font-medium">Phone Number</label>

                <input type="number"
									onChange={(e) => setNumber(e.target.value)}
									required
									value={number}
									placeholder="+1 (555) 000-000"
                class="m-0 mb-4 block w-full bg-[#CBC7C1] border-2 border-black text-black align-middle focus:border-[#E4A4BD] text-sm px-3 h-9 py-6 pl-4 uppercase" maxlength="256" name="name-2" />
              </div>


              <div class="relative mb-5 md:mb-6 lg:mb-8">
                <label for="field-3" class="mb-1 font-medium text-black">Project Brief</label>
                <textarea type="text"
								onChange={(e) => setMessage(e.target.value)}
								required
								value={message}
                placeholder="project details" maxlength="5000" name="field" class="m-0 block h-auto min-h-[128px] w-full overflow-auto bg-[#CBC7C1] border-2 border-black text-white align-middle focus:border-[#E4A4BD] text-sm mb-2.5 px-3 py-2 pl-4 uppercase"> </textarea>
              </div>
              <input type="submit" value="Send Request" class="flex items-center justify-center gap-x-1 py-2 px-4 font-medium bg-[#E4A4BD] text-black  hover:bg-black hover:border-2 hover:text-white duration-150 rounded-full md:inline-flex  active:bg-indigo-700 outline-none shadow-md focus:shadow-none focus:ring-2 ring-offset-2 ring-indigo-600 sm:mt-0 sm:ml-3 sm:w-auto transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110"/>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
  )
}

export default NewContact