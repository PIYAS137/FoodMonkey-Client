import React from 'react';
import usePublicAxios from '../../../Hooks/usePublicAxios';
import Swal from 'sweetalert2';
import useGetAllUsers from '../../../Hooks/useGetAllUsers';

const UserTableRow = ({ one }) => {
    const publicAxios = usePublicAxios();
    const [, refetch] = useGetAllUsers()

    const handleClickMakeAdmin = () => {
        Swal.fire({
            title: "Sure to Make Admin ?",
            text: "Its a serious operation for access sensitive data !",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, update it!"
        }).then((result) => {
            if (result.isConfirmed) {
                publicAxios.patch(`/user/${one?._id}`)
                    .then(res => {
                        if (res.data.modifiedCount > 0) {
                            Swal.fire({
                                title: "Updated!",
                                text: "Your operation has been updated.",
                                icon: "success"
                            });
                            refetch();
                        }
                    })
            }
        });
    }



    return (
        <tr key={one?._id}>
            <td className=" p-0">
                <img className=" max-w-12 rounded-full aspect-square object-cover" src={one?.user_image} />
            </td>
            <td>{one?.user_name}</td>
            <td>{one?.user_email}</td>
            <td>
                {
                    one?.user_status === 'admin' ?
                        <small className=" text-purple-600 italic font-semibold"> admin</small>
                        :
                        <button onClick={handleClickMakeAdmin} className=" btn btn-xs hover:bg-purple-700 bg-purple-500 text-white">make admin</button>
                }
            </td>
        </tr>
    )
}

export default UserTableRow