import React from 'react';
import TextField from '../TextField';
import { useState } from 'react';
import Image from 'next/image';
import Button from '../Button';
import { FunctionComponent } from 'react';


import UserAvatar from '../UserAvatar';
import pictureIcon from '../../../public/picture.svg';
import anexoIcon from '../../../public/anexo.svg';

const username = "sonhos";


{/* ambiente dev, alterar depois */ }
interface UserProps {
    data: object
}

const NewTopic: FunctionComponent<UserProps> = ({ data }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleSubmit = (e: any) => {
        e.preventDefault();
        console.log(e);
    };

    const handleSaveDraft = (e: any) => {
        console.log(e);
        {/* ambiente dev */ }
        setIsOpen(false);
    }

    function handleFocus() {
        setIsOpen(true);
    }

    const NewPostForm = () => {
        return (
            <form className='mt-10 gap-6 text-black'>
                <TextField
                    id='title'
                    type={'text'}
                    placeholder={'Título'}
                />
                <textarea
                    id='content'
                    rows={8}
                    placeholder={'Texto (opcional)'}
                    className={'focus:outline-none items-stretch w-full px-2 text-xs mt-6 p-1 rounded'}
                />
                <div className='flex flex-row justify-between'>
                    <div className='flex flex-row gap-2 ml-1'>
                        <Image src={pictureIcon} height={24} width={24} alt={'picture icon'} />
                        <Image src={anexoIcon} height={24} width={24} alt={'anexo icon'} />
                    </div>
                    <div className='flex justify-end mt-4'>
                        <Button
                            type='button'
                            title='salvar rascunho'
                            className='theme-secondary-btn rounded py-2 px-10 text-sm mr-4'
                            onClick={handleSaveDraft}
                        />
                        <Button
                            type='submit'
                            title='postar'
                            className='theme-btn py-2 px-10 rounded text-sm'
                            onClick={handleSubmit}
                        />
                    </div>
                </div>
            </form>
        )
    };

    return (
        <div
            className='w-full h-full rounded theme-component px-5 py-6 max-w-xl mx-auto mt-10'
            onFocus={handleFocus}
        >
            <div className={isOpen ? 'flex flex-col' : 'flex flex-row'}>
                <div className='flex flex-row items-center mr-4 gap-4'>
                    <UserAvatar img={data.avatar} width={36} height={36} alf={'avatar'} />
                    {isOpen
                        && <span className='theme-text text-md font-bold'>
                            postar como {' '}
                            <a className='theme-text-purple'>
                                {data.username}
                            </a>
                        </span>
                    }
                </div>
                {
                    isOpen
                        ? <NewPostForm />
                        : <TextField
                            placeholder='postar na Vacuum'
                        />
                }
            </div>
        </div>
    )
}

export default NewTopic;