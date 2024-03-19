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

<div class="py-24 md:py-24 lg:py-32 mx-auto w-full max-w-7xl px-5 md:px-10 bg-gray-900" data-aos="fade-up-left">
  <div class="grid items-center max-[991px]:justify-items-start grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-20" data-aos="fade-up-left">
    <div class="flex flex-col items-start max-[991px]:max-w-[720px]">
      <h2 class="font-bold mb-2 text-3xl md:text-5xl text-gray-200">Let's build something exciting together!</h2>
      <div class="ml-0 mr-0 mt-4 max-w-[528px] mb-5 md:mb-6 lg:mb-8 pb-4">
        <p class="text-[#636262]"></p>
      </div>
      <div class="mb-4 flex items-center max-[991px]:mb-px py-4">
        <img src={Star} alt="" class="inline-block mr-1 w-5 pl-0 "/>

        <img src={Star} alt="" class="inline-block mr-1 w-5 pl-0"/>
        <img src={Star} alt="" class="inline-block mr-1 w-5 pl-0"/>
        <img src={Star} alt="" class="inline-block mr-1 w-5 pl-0"/>
        <img src={Star} alt="" class="inline-block mr-1 w-5 pl-0"/>
      </div>
      <div class="mb-8 max-w-[480px]">
        <p class="text-gray-300">Ruth have done an Amazing job with helping my business get it's digital strategy where it need to be! She have helped us get Google ranking. She analyze, do their Research, & provide Excellent Results... I would recommend Ruth to anyone who is in need of help with their small business website, marketing and sales funnel. Thanks so much Ruth, I look forward to continue working with you for years to come.</p>
      </div>
      <div class="flex flex-row items-start">
        <img src={Man} alt="" class="inline-block h-16 w-16 object-cover mr-4"/>
        <div class="flex flex-col items-start">
          <h6 class="text-base font-bold text-white">Melvin Warren</h6>
          <p class="text-sm text-[#636262]">Hope Active</p>
        </div>
      </div>
    </div>
    <div class="mx-auto max-w-[608px] bg-[#f2f2f7] px-8 max-[991px]:ml-0 max-[991px]:mr-0 pt-[2em] pb-8" data-aos="fade-up-right">
      <div class="text-center">
        <h3 class="font-bold text-2xl md:text-3xl">Now Accepting New Clients!</h3>
        <div class="mx-auto mt-4 max-w-[480px] mb-5 md:mb-6 lg:mb-8">
          <div class="text-sm text-[#647084]">Interested in creating a new custom coded website or application with React or Angular? Reach out to me today and let's bring your ideas to life!</div>
        </div>
        <div class="mx-auto w-full max-w-[400px]">
          <div class="mx-auto max-w-[400px] text-left mb-4">

            <form  onSubmit={handleSubmit}
						className="space-y-5"

            name="wf-form-password"
            method="get">
              <div class="relative">
                <label for="name-2" class="mb-1 font-medium">Full Name</label>
                <input
                type="text"
								onChange={(e) => setName(e.target.value)}
								required
								value={name}
                type="text" class="m-0 mb-4 block w-full bg-white align-middle text-[#333333] focus:border-[#3898ec] text-sm px-3 h-9 py-6 pl-4" maxlength="256" name="name-2" placeholder="" required=""/>
              </div>

              <div class="relative mb-2">
                <label for="name-2" class="mb-1 font-medium">Business Name</label>
                <input
                type="bname"
								onChange={(e) => setBname(e.target.value)}
								required
								value={bname}
                type="text" class="m-0 mb-4 block w-full bg-white align-middle text-[#333333] focus:border-[#3898ec] text-sm px-3 h-9 py-6 pl-4" maxlength="256" name="name-2" placeholder="" required=""/>
              </div>

              <div class="relative mb-2">
                <label for="name-2" class="mb-1 font-medium">Business Email</label>
                <input type="email"
								onChange={(e) => setEmail(e.target.value)}
								required
								value={email}
                class="m-0 mb-4 block w-full bg-white align-middle text-[#333333] focus:border-[#3898ec] text-sm px-3 h-9 py-6 pl-4" maxlength="256" name="name-2" placeholder="" required=""/>
              </div>

              <div class="relative mb-2">
                <label for="name-2" class="mb-1 font-medium">Phone Number</label>

                <input type="number"
									onChange={(e) => setNumber(e.target.value)}
									required
									value={number}
									placeholder="+1 (555) 000-000"
                class="m-0 mb-4 block w-full bg-white align-middle text-[#333333] focus:border-[#3898ec] text-sm px-3 h-9 py-6 pl-4" maxlength="256" name="name-2" />
              </div>


              <div class="relative mb-5 md:mb-6 lg:mb-8">
                <label for="field-3" class="mb-1 font-medium">Project Brief</label>
                <textarea type="text"
								onChange={(e) => setMessage(e.target.value)}
								required
								value={message}
                placeholder="" maxlength="5000" name="field" class="m-0 block h-auto min-h-[128px] w-full overflow-auto bg-white align-middle text-[#333333] focus:border-[#3898ec] text-sm mb-2.5 px-3 py-2 pl-4"> </textarea>
              </div>
              <input type="submit" value="Get free quote" class="flex items-center justify-center gap-x-1 py-2 px-4 text- font-medium bg-red-300 text-black  hover:bg-sky-400  duration-150 rounded-full md:inline-flex  active:bg-indigo-700 outline-none shadow-md focus:shadow-none focus:ring-2 ring-offset-2 ring-indigo-600 sm:mt-0 sm:ml-3 sm:w-auto transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110"/>
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