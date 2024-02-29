import React, { useState } from 'react';
import '../../../css/forms.css';
import { useForm, usePage, Head } from '@inertiajs/react';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import PrimaryButton from '@/Components/PrimaryButton';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';


export default function ContactForm({contact}) {

    const currentDate = new Date();
    const formattedDate = currentDate.toISOString().split('T')[0];

    const { auth } = usePage().props;
 
    console.log(auth);
    console.log(contact);

    const { data, setData, processing, errors, reset, patch } = useForm({
        name: '',
        lastname: '',
        phone_number: '',
        city: '',
        state: '',
        updated_at: formattedDate
    });

    const submitHandler = (e) => {
        e.preventDefault();
        patch(route('contacts.update', contact.id), {
            onSuccess: () => reset()
        });

    };

    return (
        <AuthenticatedLayout user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">
                <a href={route('contacts.index')}>
                    Contacts
                </a>
            </h2>}
        >
            <Head title="Contacts" />
            <div className='new-form'>
                <form onSubmit={submitHandler} method='PATCH'>
                    <ul className="list-inline">
                        <li className="list-inline-item">
                            <InputLabel htmlFor="name" value="Name" />

                            <TextInput
                                id="name"
                                name="name"
                                value={data.name}
                                className="mt-1 block w-full"
                                autoComplete="name"
                                isFocused={true}
                                onChange={(e) => setData('name', e.target.value)}
                                required
                            />

                            <InputError message={errors.name} className="mt-2" />
                        </li>
                        <li className="list-inline-item">
                            <InputLabel htmlFor="lastname" value="Last Name" />

                            <TextInput
                                id="last_name"
                                name="lastname"
                                value={data.lastname}
                                className="mt-1 block w-full"
                                autoComplete="lastname"
                                isFocused={true}
                                onChange={(e) => setData('lastname', e.target.value)}
                                required
                            />

                            <InputError message={errors.lastname} className='mt-2' />
                        </li>
                        <li className="list-inline-item">
                            <InputLabel htmlFor="phone_number" value='Phone Number' />

                            <TextInput
                                id="phone_number"
                                name="phone_number"
                                value={data.phone_number}
                                className="mt-1 block w-full"
                                autoComplete="phone_number"
                                isFocused={true}
                                onChange={(e) => setData('phone_number', e.target.value)}
                            />

                            <InputError message={errors.phone_number} className='mt-2' />
                        </li>
                        <li className="list-inline-item">

                            <InputLabel htmlFor="city" value='City' />

                            <TextInput
                                id="city"
                                name="city"
                                value={data.city}
                                className="mt-1 block w-full"
                                autoComplete="city"
                                isFocused={true}
                                onChange={(e) => setData('city', e.target.value)}
                            />

                            <InputError message={errors.city} className='mt-2' />
                        </li>
                        <li className="list-inline-item">
                            <InputLabel htmlFor="state" value='State' />

                            <TextInput
                                id="state"
                                name="state"
                                value={data.state}
                                className="mt-1 block w-full"
                                autoComplete="state"
                                isFocused={true}
                                onChange={(e) => setData('state', e.target.value)}
                            />

                            <InputError message={errors.state} className='mt-2' />
                        </li>
                        <li className="list-inline-item">
                            <PrimaryButton className="ms-4" disabled={processing}>
                                Save
                            </PrimaryButton>
                        </li>
                    </ul>
                </form>

            </div>
        </AuthenticatedLayout>
    );
};
