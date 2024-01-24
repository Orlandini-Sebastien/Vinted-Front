
import { Link } from 'react-router-dom'

const Offers = ({ data }) => {
	return (
		<section className="my-8 flex flex-wrap justify-start ">
			{data.map((elem) => {
				return (
					<Link
						to={`/offer/${elem._id}`}
						className="px-4 my-4 max-md:p-8  mx-auto xl:w-[19%] lg:w-[24%] md:w-[49%] max-md:w-11/12"
						key={elem._id}
					>
						<div className=" flex items-center">
							<img
								className="p-1 w-10 h-10 object-fill rounded-full "
								src={elem.owner?.account?.avatar?.secure_url}
							/>
							<div className="p-1 text-md">{elem.owner.account.username}</div>
						</div>

						<img
							className="w-full h-4/5  object-cover  "
							src={elem.product_image}
							alt="picture"
						/>
						<div className='text-lg '>{elem.product_price && elem.product_price} €</div>
						<div className='text-md text-gray-400'>
							{elem.product_details[1].TAILLE && elem.product_details[1].TAILLE}
						</div>
						<div className='text-md text-gray-400'>
							{elem.product_details[0].MARQUE && elem.product_details[0].MARQUE}
						</div>
					</Link>
				)
			})}
		</section>
	)
}

export default Offers
