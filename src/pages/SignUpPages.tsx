import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'
import { toast } from 'react-toastify'
import { NavLink, useNavigate } from 'react-router-dom';
import { Layout } from '../layouts';
import { Container, Input } from '../components';
import tw from 'twin.macro'
import axios from 'axios';
import { handleRegister } from '../services/authService';


type UserSubmitForm = {
    fullname: string
    email: string
    password: string
}

const validationSchema = Yup.object().shape({
    fullname: Yup.string().required('Fullname is required'),
    email: Yup.string().required('Email is required'),
    password: Yup.string().required('Password is required'),
})
const SignUpPages = () => {
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isValid },
    } = useForm<UserSubmitForm>({
        mode: 'onSubmit',
        resolver: yupResolver(validationSchema),
    })

    useEffect(() => {
        const arrErrors = Object.values(errors);
        if (arrErrors.length > 0) {
            toast.error(arrErrors[0]?.message)
        }
    }, [errors])
    const onSubmitForm = async (values: UserSubmitForm) => {
        if (!isValid) return;
        const { fullname, email, password } = values
        try {
            await handleRegister(email, password);
            toast.success("Register successfully!!!");
            reset();
            setTimeout(() => {
                navigate('/')
            }, 500);
        } catch (error: any) {
            toast.error(error.message)
        }
    }
    return (
        <Layout>
            <Container>
                <div tw="w-[60%] mx-auto flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                    <div tw="sm:mx-auto sm:w-full sm:max-w-sm">

                        <h2 tw="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                            Sign up
                        </h2>
                    </div>

                    <div tw="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                        <form tw="space-y-6" action="/" onSubmit={handleSubmit(onSubmitForm)} method="POST">
                            <div>
                                <label htmlFor="fullname" tw="block text-sm font-medium leading-6 text-gray-900">
                                    Full name
                                </label>
                                <div tw="mt-2">
                                    <Input
                                        id='fullname'
                                        tw="block w-full h-[48px] text-[14px] [font-weight:400] rounded-md border-0 py-1.5 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        type="text"
                                        placeholder="Enter your fullname ..."
                                        {...register('fullname')}
                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="email" tw="block text-sm font-medium leading-6 text-gray-900">
                                    Email address
                                </label>
                                <div tw="mt-2">
                                    <Input
                                        id='email'
                                        tw="block w-full h-[48px] text-[14px] [font-weight:400] rounded-md border-0 py-1.5 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        type="text"
                                        placeholder="Enter your email ..."
                                        {...register('email')}
                                    />
                                </div>
                            </div>

                            <div>
                                <div tw="flex items-center justify-between">
                                    <label htmlFor="password" tw="block text-sm font-medium leading-6 text-gray-900">
                                        Password
                                    </label>
                                    <div tw="text-sm">
                                        <a href="#" tw="font-semibold text-indigo-600 hover:text-indigo-500">
                                            Forgot password?
                                        </a>
                                    </div>
                                </div>
                                <div tw="mt-2">
                                    <Input
                                        id='password'
                                        tw="block w-full h-[48px] text-[14px] [font-weight:400] rounded-md border-0 py-1.5 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        type="password"
                                        placeholder="Enter your password ..."
                                        {...register('password')}
                                    />

                                </div>
                            </div>

                            <div>
                                <button
                                    type="submit"
                                    tw="flex w-full justify-center rounded-md !bg-[#172176] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                >
                                    Sign up
                                </button>
                            </div>
                        </form>
                        <p tw="mt-10 text-center text-sm text-gray-500">You already have an account? <NavLink tw="font-semibold leading-6 text-indigo-600 hover:text-indigo-500" to={"/signin"}>Login.</NavLink></p>

                    </div>
                </div>
            </Container>
        </Layout>
    );
};

export default SignUpPages;