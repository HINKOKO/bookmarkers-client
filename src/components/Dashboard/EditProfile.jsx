import { useState, useRef } from 'react';
import { useAuth } from '../../store/AuthContext';

const EditProfile = () => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [newPass, setNewPass] = useState('');
  const [avatar, setAvatar] = useState('');

  const { user } = useAuth();
  const hiddenFileInput = useRef(null);

  console.log(user);

  return (
    <div className="container flex w-11/12 bg-orange-200 mx-auto">
      <form className="mx-auto w-4/5 mt-4 space-y-8">
        <div className="flex flex-row justify-center items-center space-between gap-8">
          <label
            htmlFor="current_email"
            className="font-small italic font-kanit"
          >
            current avatar
          </label>
          <div
            id="avatar_prez"
            className="flex flex-row space-between rounded-lg p-4 "
          >
            <div className="bg-slate-300 p-8 rounded-tl-lg rounded-bl-lg">
              <img
                src={user.avatar_url}
                alt="current_avatar"
                className="rounded-md"
                width={46}
                height={46}
              />
            </div>
            <button className="font-thin text-lg font-kanit bg-blue-400">
              load a new avatar
            </button>
            <input
              id="file"
              type="file"
              ref={hiddenFileInput}
              style={{ display: 'none' }}
            />

            {/* <button style="display:block;width:120px; height:30px;" onclick="document.getElementById('getFile').click()">Your text here</button>
  <input type='file' id="getFile" style="display:none"></input> */}
          </div>
        </div>
        <div>
          <label
            htmlFor="current_email"
            className="font-small italic font-kanit"
          >
            current mail
          </label>
          <input
            type="text"
            className="border text-sm rounded-lg block w-full p-2.5"
            maxLength={2048}
            placeholder={user.email ? user.email : 'Set your email'}
            required
          />
        </div>
        <div>
          <label
            htmlFor="current_password"
            className="font-small italic font-kanit"
          >
            current password
          </label>
          <input
            type="text"
            className="border text-sm rounded-lg block w-full p-2.5"
            maxLength={2048}
            placeholder="Please enter current password"
            required
          />
        </div>
        <div>
          <label
            htmlFor="new_password"
            className="font-small italic font-kanit"
          >
            New password
          </label>
          <input
            type="text"
            className="border text-sm rounded-lg block w-full p-2.5"
            maxLength={2048}
            placeholder="New password"
            required
          />
        </div>
        <div>
          <label
            htmlFor="confirm_new_password"
            className="font-small italic font-kanit"
          >
            Confirm New password
          </label>
          <input
            type="text"
            className="border text-sm rounded-lg block w-full p-2.5"
            maxLength={2048}
            placeholder="Confirm new password"
            required
          />
        </div>
        <button className="mt-6 px-4 py-4 border w-2/3 rounded-xl bg-amber-700 text-lg font-medium font-kanit">
          Save changes
        </button>
      </form>
    </div>
  );
};

export default EditProfile;
