import AbilitiesHeader from './AbilitiesHeader'
import styles from './styles/CardStyles.module.css'

interface IProps {
  header: string[]
  body: string
  img: string
}

const Card = ({ header, body, img }: IProps): JSX.Element => {
  return (
    <div className='px-4 py-8 h-72 flex flex-col items-center bg-white rounded-3xl drop-shadow-md'>
      <div className='rounded-full bg-white w-16 h-16 flex justify-center border-4 border-primary'>
        <img src={img} width='70%' className={styles.filterPrimary} />
      </div>
      <AbilitiesHeader firstLine={header[0]} secondLine={header[1]} />
      <p className='text-center'>{body}</p>
    </div>
  )
}

export default Card
