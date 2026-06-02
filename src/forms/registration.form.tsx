'use client';
import { Button, Form, Input } from '@heroui/react';
import { useState } from 'react';
import { registerUser } from '@/actions/register';


const validateEmail = (email: string) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

interface RegisterFormProps {
  onClose?: () => void;
}

export default function RegisterForm({ onClose }: RegisterFormProps) {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) return;

    await registerUser(formData);
    console.log(formData);
    
    onClose?.();
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
          if (!validateEmail(value)) return 'Please enter a valid email';
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
          if (value.length < 6) return 'Password must be at least 6 characters';
          return null;
        }}
      />
      <Input
        isRequired
        aria-label="Confirm Password"
        label="Confirm Password"
        labelPlacement="outside"
        name="confirmPassword"
        placeholder="Confirm your password"
        type="password"
        value={formData.confirmPassword}
        classNames={{
          inputWrapper: 'bg-default-100',
          input: 'text-sm focus:outline-none',
        }}
        onChange={(e) =>
          setFormData({ ...formData, confirmPassword: e.target.value })
        }
        validate={(value) => {
          if (!value) return 'Please confirm your password';
          if (value !== formData.password) return 'Passwords do not match';
          return null;
        }}
      />
      <div className="flex gap-2 w-full">
        <Button variant="bordered" className="w-full" onPress={onClose}>
          Cancel
        </Button>
        <Button type="submit" color="primary" className="w-full">
          Register
        </Button>
      </div>
    </Form>
  );
}
