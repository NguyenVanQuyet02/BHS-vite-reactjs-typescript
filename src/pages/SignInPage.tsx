import React, { useEffect } from 'react';
import { Layout } from '../layouts';
import tw from 'twin.macro'
import { Container, Input } from '../components';
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'
import { toast } from 'react-toastify'
import { Link, NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { handleLogin } from '../services/authService';
import { useDispatch } from 'react-redux';
import { deleteToken, saveToken } from '../redux-core/auth';

type UserSubmitForm = {
    email: string
    password: string
}

const validationSchema = Yup.object().shape({
    email: Yup.string().required('Email is required.'),
    password: Yup.string().required('Password is required.'),
})

const SignInPage = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
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

    }, [errors])
    const onSubmitForm = async (values: UserSubmitForm) => {
        if (!isValid) return;
        const { email, password } = values
        try {
            const res = await handleLogin(email, password)
            dispatch(saveToken(res));
            toast.success("Login successfully!!!");
            reset();
            navigate('/todolist');

        } catch (error: any) {
            toast.error("Email or password is incorrect!!!");
        }
    }
    return (
        <Layout>
            <Container tw='flex gap-x-[8%] justify-between py-12 md:(flex-col-reverse items-center gap-y-12 p-0 m-0)  sm:(flex-col-reverse items-center gap-y-6 p-0 m-0)'>
                <img
                    tw="flex w-[44%] md_max:min-w-[320px] h-auto object-contain justify-center items-center shrink-0 md:w-[68%] md:m-0 sm:w-4/5 sm:m-0"
                    src="/assets/imgs/home1/frame1.png"
                    alt="slider image"
                />
                <div tw="w-[60%] mx-auto flex min-h-full flex-1 flex-col justify-center py-12 sm:(w-[74%] p-0 m-0)">
                    <div tw="sm:mx-auto sm:w-full sm:max-w-sm">
                        <h2 tw="text-center lg:(text-left) text-2xl font-bold leading-9 tracking-tight text-primary">
                            Sign in
                        </h2>
                    </div>

                    <div tw="mt-6 sm:mx-auto sm:w-full">
                        <form action="/" onSubmit={handleSubmit(onSubmitForm)} method="POST">
                            <div tw='h-[110px]'>
                                <label htmlFor="email" tw="block text-sm font-medium leading-6 text-gray-900">
                                    Email
                                </label>
                                <div tw="mt-2">
                                    <Input
                                        id='email'
                                        tw="block w-full h-[52px] text-[14px] [font-weight:400] rounded-md border-0 py-1.5 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        type="text"
                                        placeholder="Enter your email ..."
                                        {...register('email')}
                                    />
                                </div>
                                {errors?.email && <p tw='text-red-500 m-0 p-0 text-[13px]'>{errors?.email?.message}</p>}

                            </div>

                            <div tw='h-[110px]'>
                                <div tw="flex items-center justify-between">
                                    <label htmlFor="password" tw="block text-sm font-medium leading-6 text-gray-900">
                                        Password
                                    </label>

                                </div>
                                <div tw="mt-2">
                                    <Input
                                        id='password'
                                        tw="block w-full h-[52px] text-[14px] [font-weight:400] rounded-md border-0 py-1.5 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        type="password"
                                        placeholder="Enter your password ..."
                                        {...register('password')}
                                    />

                                </div>
                                {errors?.password && <p tw='text-red-500 m-0 p-0 text-[13px]'>{errors?.password?.message}</p>}
                            </div>
                            <div tw='h-fit mb-1 flex items-center justify-between'>
                                <label htmlFor="terms" tw="w-fit h-fit cursor-pointer flex items-center gap-x-2 font-medium leading-6 text-gray-900">
                                    <input tw='w-5 h-5' type="checkbox" id='terms' />
                                    <p tw='text-primary text-[14px]'>Remember me</p>
                                </label>
                                <div tw="text-sm">
                                    <a href="#" tw="font-semibold text-indigo-600 hover:text-indigo-500">
                                        Forgot password?
                                    </a>
                                </div>
                            </div>
                            <button
                                type="submit"
                                tw="flex w-full mt-2 h-[52px] justify-center items-center rounded-md !bg-[#172176] px-3 py-1.5 text-[16px] font-semibold leading-6 text-white shadow-sm hover:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Sign in
                            </button>
                            <p tw='text-center text-secondary text-xl mt-4'>Or</p>
                            <div tw='mt-4 flex items-center justify-between sm:(flex-col gap-y-4)'>
                                <Link to="/facebook-login" tw='cursor-pointer shrink-0 w-[48%] sm:(w-full) h-[52px] px-4 flex items-center justify-center gap-x-2 border border-secondary'>
                                    <img tw='w-[36px] h-auto' src="/assets/icons/common/facebook_authen.png" alt="register with facebook" />
                                    <p tw='text-primary'>Facebook</p>
                                </Link>
                                <Link to="/google-login" tw='cursor-pointer shrink-0 w-[48%] sm:(w-full) h-[52px] px-4 flex items-center justify-center gap-x-2 border border-secondary'>
                                    <img tw='w-[36px] h-auto' src="/assets/icons/common/google_authen.png" alt="register with facebook" />
                                    <p tw='text-primary leading-[100%] p-0 m-0'>Google</p>
                                </Link>
                            </div>
                        </form>
                        <p tw="mt-4 text-center text-sm text-gray-500">You don't have an account? <NavLink tw='font-semibold leading-6 text-indigo-600 hover:text-indigo-500' to={"/signup"}>Register.</NavLink></p>
                    </div>
                </div>
            </Container>
        </Layout>
    );
};

export default SignInPage;