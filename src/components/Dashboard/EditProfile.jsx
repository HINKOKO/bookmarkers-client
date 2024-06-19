import { useState, useRef } from 'react';
import { useAuth } from '../../store/AuthContext';
import { getAvatarUrl } from '../../store/avatar_utils';

const backend = `http://localhost:8080`;

const EditProfile = () => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [newPass, setNewPass] = useState('');
  const [newPassConfirm, setNewPassConfirm] = useState('');
  const [avatar, setAvatar] = useState(null);
  const [preview, setPreview] = useState(null);

  const { user } = useAuth();
  const avatarUrl = getAvatarUrl(user?.avatar_url);

  const hiddenFileInput = useRef(null);

  console.log(user);

  const handleFileChange = e => {
    const file = e.target.files[0];
    setAvatar(file);
    setPreview(URL.createObjectURL(file));
  };

  // function to programaticaly click the hidden file input when the button is clicked
  const handleButtonClick = () => {
    hiddenFileInput.current.click();
  };

  const handleUpload = async () => {
    if (avatar) {
      const formData = new FormData();
      formData.append('avatar', avatar);

      console.log(`${backend}/dashboard/upload-avatar`);

      try {
        const response = await fetch(`${backend}/dashboard/upload-avatar`, {
          method: 'POST',
          body: formData,
          credentials: 'include',
        });
        if (!response.ok) {
          throw new Error('upload failed');
        }
        const data = await response.json();
        console.log('upload successfull', data);
      } catch (error) {
        console.error('error uploading your avatar', error);
      }
    }
  };

  return (
    <div className="container flex w-11/12 bg-orange-200 mx-auto">
      <form
        className="mx-auto w-4/5 mt-4 space-y-8"
        onSubmit={e => {
          e.preventDefault();
          handleUpload();
        }}
      >
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
                src={preview || avatarUrl}
                alt="current_avatar"
                className="rounded-md"
                width={46}
                height={46}
              />
            </div>
            <button
              type="button"
              className="font-thin text-lg font-kanit bg-blue-400"
              onClick={handleButtonClick}
            >
              load a new avatar
            </button>
            <input
              id="file"
              type="file"
              ref={hiddenFileInput}
              style={{ display: 'none' }}
              accept="image/*"
              onChange={handleFileChange}
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
            placeholder={user.email || email || 'Set your email'}
            onChange={e => setEmail(e.target.value)}
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
            onChange={e => setPass(e.target.value)}
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
            onChange={e => setNewPass(e.target.value)}
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
            onChange={e => setNewPassConfirm(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="mt-6 px-4 py-4 border w-2/3 rounded-xl bg-amber-700 text-lg font-medium font-kanit"
        >
          Save changes
        </button>
      </form>
    </div>
  );
};

export default EditProfile;
