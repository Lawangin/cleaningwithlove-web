interface IProps {
    firstLine: string
    secondLine: string
}

const AbilitiesHeader = ({ firstLine, secondLine }: IProps): JSX.Element => {

    return (
        <div className='py-2 text-lg'>
            <p className='font-bold text-center'>{firstLine}</p>
            <p className='text-center'>{secondLine}</p>
        </div>
    );

}

export default AbilitiesHeader;