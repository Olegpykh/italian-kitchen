'use client';
import CustomModal from '../common/modal';
import RegisterForm from '@/forms/registration.form';

interface IProps {
  isOpen: boolean;
  onClose: () => void;
}

const RegistrationModal = ({ isOpen, onClose }: IProps) => {
  return (
    <CustomModal isOpen={isOpen} onClose={onClose} title="Create Account">
      <RegisterForm onClose={onClose} />
    </CustomModal>
  );
};

export default RegistrationModal;
