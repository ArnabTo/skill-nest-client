import { useForm } from "react-hook-form"
import { Button, Card, Label, TextInput } from 'flowbite-react';
import { Link } from 'react-router-dom';
import googleGif from '../../assets/google.gif'
import signupBg from '../../assets/signup2.png';
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import toast, { Toaster } from 'react-hot-toast';
const SignUp = () => {

    const {user,  createUser, updateUser, signInWithGoogle } = useContext(AuthContext);
    const { register, handleSubmit, formState: { errors }, } = useForm();

    const onSubmit = (data) => {

        createUser(data.email, data.password)
            .then(() => {
                updateUser(data.name, data.photo)
                toast.success('successfuly registered')
                // console.log(res.user)
                // console.log(user)
            })
    }

    const handleSignWithGoogle=()=>{
        signInWithGoogle()
        .then(()=>{
            if(user){
                toast.success('Loged In!')
            }
        })

    }
    const customShadow = {
        boxShadow:
            '1.2px 5.3px 2.7px rgba(0, 0, 0, 0.022), ' +
            '3px 13.5px 6.9px rgba(0, 0, 0, 0.031), ' +
            '6.2px 27.5px 14.2px rgba(0, 0, 0, 0.039), ' +
            '12.8px 56.6px 29.2px rgba(0, 0, 0, 0.048), ' +
            '35px 155px 80px rgba(0, 0, 0, 0.07)',
    };
    return (
        <div className='flex justify-between items-center my-24'>
            <Card className="max-w-1/2 w-2/5 mx-auto" style={customShadow}>
                <Button onClick={handleSignWithGoogle} color='red'>
                    <p>Continue with</p>
                    <img className='h-12' src={googleGif} />
                </Button>
                <span className="relative flex justify-center">
                    <div
                        className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-gray-500 to-transparent opacity-75"
                    ></div>
                    <span className="relative z-10 bg-white px-6">Or</span>
                </span>
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="name" value="Your Name" />
                        </div>
                        <TextInput id="name" type="text" {...register('name')} className='focus:border-[red]' placeholder="name" required />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="photourl" value="Your PhotoUrl" />
                        </div>
                        <TextInput id="photourl" type="text" {...register('photo')} placeholder="photoUrl" required />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="email" value="Your email" />
                        </div>
                        <TextInput id="email1" type="email" {...register('email')} placeholder="email" required />

                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="password" value="Your password" />
                        </div>
                        <TextInput id="password" type="password" {...register('password', { pattern: { message: 'format', value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/ } })} required />
                        {errors.password && <p className="text-[red]">Password must be atleast a capital letter, a capital letter & more than 6 character</p>}
                    </div>
                    <button type="submit" onClick={onSubmit} className='bg-[#FE3258] hover:bg-[#fa0e39] p-3 rounded text-white'>Sign In</button>
                </form>
                <Link to='/signin' className="w-1/2 mx-auto text-[#252525]"><p>Already a user? Sign In Here.</p></Link>
            </Card>
            <div>
                <img className='max-w-lg hidden md:block' id="floating" src={signupBg} />
            </div>
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
        </div>
    );
};

export default SignUp;