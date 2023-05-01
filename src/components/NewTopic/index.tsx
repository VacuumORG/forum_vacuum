import React from 'react';
import UserAvatar from '../UserAvatar';
import avatar from '../../../public/AvatarImage.png';
import TextField from '../TextField';
import Button from '../Button';
import Image from 'next/image';
import pictureIcon from '../../../public/picture.svg';
import anexoIcon from '../../../public/anexo.svg';
import { FunctionComponent } from 'react';

interface NewTopicProps {
    isOpen: boolean
}

const username = "sonhos";
const draftCounter = 8;


const NewTopic: FunctionComponent<NewTopicProps> = ({ isOpen }) => {
    {/* usando type any apenas para handle da function onClick, alterar isso depois */ }
    const handleSubmit = (e: any) => {
        e.preventDefault();
        console.log(e);
    };

    const handleSaveDraft = (e: any) => {
        console.log(e);
    }
    if (isOpen) {
        return (
            <div className='w-full h-full rounded theme-component px-5 py-6 max-w-xl mx-auto mt-10'>
                <div className='flex flex-row justify-between items-center'>
                    <div className='flex flex-row items-center'>
                        <UserAvatar img={avatar} width={36} height={36} alf={'avatar'} />
                        <span className='theme-text text-md font-bold ml-4'>
                            postar como {' '}
                            <a className='theme-text-purple'>
                                {username}
                            </a>
                        </span>
                    </div>
                    <div className=' flex flex-row'>
                        <span className='theme-text text-md font-bold mr-2'>
                            rascunhos
                        </span>
                        {/* cor genérica do counter, alterar depois */}
                        <div className='font-bold bg-purple-600 rounded-md px-[3px]'>
                            {draftCounter}
                        </div>
                    </div>
                </div>
                <form className='mt-10 gap-6'>
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
            </div>
        )
    } else return (
        <div className='w-full h-full rounded theme-component px-5 py-6 max-w-xl mx-auto mt-10'>
            <div className='flex flex-row items-center gap-5'>
                <UserAvatar img={avatar} width={36} height={36} alf={'avatar'} />
                <TextField
                    placeholder='postar na Vacuum'
                />
            </div>
        </div>
    )

}

export default NewTopic;