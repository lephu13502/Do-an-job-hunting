import { Link } from 'react-router-dom'
import { ReactComponent as DeleteIcon } from '../assets/svg/deleteIcon.svg'
import { ReactComponent as EditIcon } from '../assets/svg/editIcon.svg'

function PostItem({ post, id, onEdit, onDelete }) {
    return (
    <li className='categoryPost'>
      <Link
        to={`/category/${post.type}/${id}`}
        className='categoryPostLink'>
        <img
          src={post.imgUrls[0]}
          alt={post.name}
          className='categoryPostImg'
        />
        <div className='categoryPostDetails'>
          <p className='categoryPostLocation'>{post.location}</p>
          <p className='categoryPostName'>{post.name}</p>

          <p className='categoryPostSalary'>
            $
            {post.offer
              ? post.discountedPrice
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ',')
              : post.regularPrice
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
            {post.type === 'rent' && ' / Month'}
          </p>
          <div className='categorypostInfoDiv'>
            
            <p className='categorypostInfoText'>
              {post.bedrooms > 1
                ? `${post.bedrooms} Bedrooms`
                : '1 Bedroom'}
            </p>
            
            <p className='categorypostInfoText'>
              {post.bathrooms > 1
                ? `${post.bathrooms} Bathrooms`
                : '1 Bathroom'}
            </p>
          </div>
        </div>
      </Link>

      {onDelete && (
        <DeleteIcon
          className='removeIcon'
          fill='rgb(231, 76,60)'
          onClick={() => onDelete(post.id, post.name)}
        />
      )}

      {onEdit && <EditIcon className='editIcon' onClick={() => onEdit(id)} />}
    </li>
  )
}

export default PostItem