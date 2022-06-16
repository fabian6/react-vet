import React, { useEffect, useState } from 'react'

export const Form = () => {
    
    const [formValues, setFormValues] = useState({})

    const {petName, ownerName, email, releaseDate, symptoms} = formValues;
    const handleInputChange = ( e ) => {
        
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = ( e ) => {
        e.preventDefault();
        console.log('sending...');
    }
    
    return (
        <div className="md:w-1/2 lg:w-2/5">
            <h2 className='font-black text-3xl text-center'>Patients follow up</h2>
            
            <p className='text-lg mt-5 text-center mb-10'>
                Add Patient and {""}
                <span className='text-indigo-600 font-bold '>Manage them</span>
            </p>

            <form className='bg-white shadow-md rounded-lg py-10 px-5 mb-10'
                onSubmit={ handleSubmit }
            >
                <div className='mb-5'>

                    <label htmlFor='mascotName' className='block text-gray-700 font-bold uppercase'>
                        Pet Name
                    </label>
                    <input 
                        className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
                        type="text"
                        placeholder='Pet Name'
                        autoComplete='off'
                        id='mascotName'
                        name = 'petName'
                        value={ petName || ''}
                        onChange = { handleInputChange }
                    />
                </div>

                <div className='mb-5'>

                    <label htmlFor='ownerName' className='block text-gray-700 font-bold uppercase'>
                        Owner Name
                    </label>
                    <input 
                        className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
                        type="text"
                        placeholder='Owner Name'
                        autoComplete='off'
                        name='ownerName'
                        id='ownerName'
                        value={ ownerName || '' }
                        onChange = { handleInputChange }
                    />
                </div>

                <div className='mb-5'>

                    <label htmlFor='ownerEmail' className='block text-gray-700 font-bold uppercase'>
                        Email
                    </label>
                    <input 
                        className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
                        type="email"
                        placeholder='Owner Email'
                        autoComplete='off'
                        id='ownerEmail'
                        name='email'
                        value={ email || '' }
                        onChange = { handleInputChange }
                    />
                </div>

                <div className='mb-5'>

                    <label htmlFor='alta' className='block text-gray-700 font-bold uppercase'>
                        Release date
                    </label>
                    <input 
                        className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
                        type="date"
                        id='alta'
                        name='releaseDate'
                        value={ releaseDate || '' }
                        onChange = { handleInputChange }
                    />
                </div>

                <div className='mb-5'>

                    <label htmlFor='mascotSymptoms' className='block text-gray-700 font-bold uppercase'>
                        Pet symptoms description
                    </label>
                    <textarea
                        id='mascotSymptoms'
                        className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
                        placeholder='Describe the pet symptoms'
                        value={ symptoms || '' }
                        name='symptoms'
                        onChange = { handleInputChange }
                    />
                </div>

                <input
                    type="submit"
                    className='bg-indigo-600 w-full p-3 text-white uppercase font-bold 
                        hover:bg-indigo-700 cursor-pointer transition-colors'
                    value= "Add Patient"
                />
            </form>
        </div>
    )
}
