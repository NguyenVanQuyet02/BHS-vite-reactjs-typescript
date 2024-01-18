import React, { useEffect } from 'react'
import {
  BlockTextSection,
  Button,
  Category,
  Container,
  Description,
  Input,
  Label,
  Textarea,
} from '../../components'
import tw, { css } from 'twin.macro'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'
import { toast } from 'react-toastify'

type UserSubmitForm = {
  firstname: string
  lastname: string
  email: string
  subjectmessage: string
  userrequire: string
}

const validationSchema = Yup.object().shape({
  firstname: Yup.string().required('First name is required'),
  lastname: Yup.string().required('Last name is required'),
  email: Yup.string().required('Email is required').email('Email is invalid'),
  subjectmessage: Yup.string().required('Subject message is required'),
  userrequire: Yup.string().required('User require is required'),
})

const HomeContact = () => {
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
    const arrErrors = Object.values(errors)
    if (arrErrors.length > 0) {
      toast.error(arrErrors[0]?.message)
    }
  }, [errors])

  const onSubmitForm = (data: UserSubmitForm) => {
    if (isValid) {
      // console.log('dataForm: ', JSON.stringify(data, null, 2))
      console.log('dataForm: ', data)
      toast.success(
        'Submitted successfully, open the console tab to see the results!',
      )
      reset()
    }
  }

  return (
    <div tw="relative">
      <div tw="w-[82%] h-[929px] shrink-0 absolute z-[-10] left-0 top-[-24%] bg-no-repeat bg-contain bg-[url('/assets/imgs/home1/background_contact.png')]" />
      <Container tw="mb-[68.66px] md:mb-0 sm:mb-0">
        <div tw="w-full min-h-[200px] flex justify-center md:flex-wrap-reverse md:text-center sm:flex-wrap-reverse sm:text-center">
          <img
            src="/assets/imgs/home1/contact_animations.png"
            alt="animations contact"
            tw="w-[45.7%] h-auto object-contain shrink-0 mt-[68px] md:w-[60%] md:m-0 sm:w-[70%] sm:m-0"
          />
          <section tw="w-[46%] ml-[8.8%] md:w-4/5 md:my-0 md:mx-auto sm:w-4/5 sm:my-0 sm:mx-auto">
            <BlockTextSection tw="text-left mb-[46px]">
              <Category tw="sm:text-center">Contact Us</Category>
              <Label tw="w-4/5 mx-0 md_max:w-full sm:text-center">
                Send your inquiry to our expert team
              </Label>
              <Description tw="w-full mx-0 md:mx-auto sm:text-center sm:mx-auto">
                Lorem ipsum dolor sit amet nulla turapis tellus.
              </Description>
            </BlockTextSection>
            <form onSubmit={handleSubmit(onSubmitForm)}>
              <div tw="mb-[38.32px] md:mb-6 sm:mb-0 w-full sm:flex-col flex justify-between">
                <Input
                  tw="w-[47%] sm:w-full inline-block md:mb-0 sm:mb-4"
                  type="text"
                  placeholder="First name"
                  {...register('firstname')}
                />
                <Input
                  tw="w-[47%] sm:w-full inline-block md:mb-0 sm:mb-4"
                  type="text"
                  placeholder="Last name"
                  {...register('lastname')}
                />
              </div>
              <Input
                tw="w-full mb-[38.32px] md:mb-6 md:w-full sm:mb-4"
                type="text"
                placeholder="Email address"
                {...register('email')}
              />
              <Input
                tw="w-full mb-[38.32px] md:mb-6 md:w-full sm:mb-4"
                type="text"
                placeholder="Subject message"
                {...register('subjectmessage')}
              />
              <Textarea
                placeholder="Your inquiry here"
                tw="w-full mb-[54.84px] md:mb-6 sm:mb-4"
                {...register('userrequire')}
              ></Textarea>
              <Button $variant="primary" tw="px-[56px] h-[58px] bg-pink">
                Send Message
              </Button>
            </form>
          </section>
        </div>
      </Container>
    </div>
  )
}

export default HomeContact
