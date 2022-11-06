import React, { ChangeEvent, useEffect, useState } from 'react';

type ProfileStatusPropsType = {
  status: string;
  isOwner: boolean;
  updateStatus: (status: string) => void;
};

export const ProfileStatus = ({
  status,
  isOwner,
  updateStatus,
}: ProfileStatusPropsType) => {
  const [editMode, setEditMode] = useState(false);
  const [localStatus, setLocalStatus] = useState(status);

  useEffect(() => {
    setLocalStatus(status);
  }, [status]);

  const updateStatusFoo = () => {
    setEditMode(false);
    updateStatus(localStatus);
  };

  const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
    setLocalStatus(e.currentTarget.value);
  };

  return (
    <p>
      {!editMode && (
        <div>
          <span
            onDoubleClick={() => {
              if (isOwner) {
                setEditMode(true);
              }
            }}
          >
            {status}
          </span>
        </div>
      )}
      {editMode && (
        <div>
          <input
            onChange={onStatusChange}
            autoFocus
            onBlur={updateStatusFoo}
            value={localStatus}
          />
        </div>
      )}
    </p>
  );
};
