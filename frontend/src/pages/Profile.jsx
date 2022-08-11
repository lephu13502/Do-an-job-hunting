import UserNav from "../components/UserNav";
import Footer from "../components/Footer";
import Header from "../components/profile/Header";
import Content from "../components/profile/Content";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import PostItem from "../components/PostItem";
import arrowRight from "../assets/svg/keyboardArrowRightIcon.svg";
import homeIcon from "../assets/svg/homeIcon.svg";

function Profile() {
  // const auth = getAuth()
  // const [loading, setLoading] = useState(true)
  // const [listings, setListings] = useState(null)
  // const [changeDetails, setChangeDetails] = useState(false)
  // const [formData, setFormData] = useState({
  //   name: auth.currentUser.displayName,
  //   email: auth.currentUser.email,
  //   profile_img: auth.currentUser.photoURL,

  // })

  // const { name, email } = formData

  // const navigate = useNavigate()

  // useEffect(() => {
  //   const fetchUserPosts = async () => {
  //     const postsRef = collection(db, 'posts')

  //     const q = query(
  //       postsRef,
  //       where('userRef', '==', auth.currentUser.uid),
  //       orderBy('timestamp', 'desc')
  //     )

  //     const querySnap = await getDocs(q)

  //     let posts = []

  //     querySnap.forEach((doc) => {
  //       return posts.push({
  //         id: doc.id,
  //         data: doc.data(),
  //       })
  //     })

  //     setListings(listings)
  //     setLoading(false)
  //   }

  //   fetchUserPosts()
  // }, [auth.currentUser.uid])

  // const onSubmit = async () => {
  //   try {
  //     if (auth.currentUser.displayName !== name) {
  //       // Update display name in fb
  //       await updateProfile(auth.currentUser, {
  //         displayName: name,
  //       })

  //       // Update in firestore
  //       const userRef = doc(db, 'users', auth.currentUser.uid)
  //       await updateDoc(userRef, {
  //         name,
  //       })
  //     }
  //   } catch (error) {
  //     console.log(error)
  //     toast.error('Could not update profile details')
  //   }
  // }

  // const onChange = (e) => {
  //   setFormData((prevState) => ({
  //     ...prevState,
  //     [e.target.id]: e.target.value,
  //   }));
  // };

  // const onDelete = async (listingId) => {
  //   if (window.confirm('Are you sure you want to delete?')) {
  //     await deleteDoc(doc(db, 'listings', listingId))
  //     const updatedListings = listings.filter(
  //       (listing) => listing.id !== listingId
  //     )
  //     setListings(updatedListings)
  //     toast.success('Successfully deleted listing')
  //   }
  // }

  // const onEdit = (postId) => navigate(`/edit-post/${postId}`)
  return (
    <>
      <div className="absolute w-full z-20">
        <UserNav />
      </div>
      <main>
        <Header />
        <Content />
      </main>
      <Footer />
    </>
  );
}
export default Profile;
