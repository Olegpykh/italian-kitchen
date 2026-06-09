'use client';
import { Button, Form, Input } from '@heroui/react';
import { useState } from 'react';
import { signInWithCredentials } from '@/actions/sign-in';
import { useRouter } from 'next/navigation';

interface IProps {
  onClose?: () => void;
}

const LoginForm = ({ onClose }: IProps) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await signInWithCredentials(formData.email, formData.password);
    onClose?.();
    router.refresh();
  };

  return (
    <Form className="w-full flex flex-col gap-4" onSubmit={handleSubmit}>
      <Input
        isRequired
        aria-label="Email"
        label="Email"
        labelPlacement="outside"
        name="email"
        placeholder="Enter your email"
        type="email"
        value={formData.email}
        classNames={{
          inputWrapper: 'bg-default-100',
          input: 'text-sm focus:outline-none',
        }}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        validate={(value) => {
          if (!value) return 'Email is required';
          return null;
        }}
      />
      <Input
        isRequired
        aria-label="Password"
        label="Password"
        labelPlacement="outside"
        name="password"
        placeholder="Enter your password"
        type="password"
        value={formData.password}
        classNames={{
          inputWrapper: 'bg-default-100',
          input: 'text-sm focus:outline-none',
        }}
        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
        validate={(value) => {
          if (!value) return 'Password is required';
          return null;
        }}
      />
      <div className="flex gap-2 w-full">
        <Button variant="bordered" className="w-full" onPress={onClose}>
          Cancel
        </Button>
        <Button type="submit" color="primary" className="w-full">
          Login
        </Button>
      </div>
    </Form>
  );
};

export default LoginForm;
