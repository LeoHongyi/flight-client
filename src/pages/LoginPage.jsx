import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Input } from '../../components/ui/input';
import { Button } from '../../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Label } from '../../components/ui/label';

function LoginPage() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <Card className="w-full max-w-md shadow-sm border-gray-100">
        <CardHeader className="text-center space-y-1 pb-2">
          <CardTitle className="text-2xl font-bold">Welcome back</CardTitle>
        </CardHeader>
        <CardContent className="pt-4 px-6 pb-6">
          <form>
            <div className="space-y-5">
              <div className="space-y-2">
                <Label htmlFor="username" className="text-base font-normal">
                  Username or email
                </Label>
                <Input
                  id="username"
                  placeholder="Enter your username or email"
                  type="text"
                  required
                  className="h-12"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password" className="text-base font-normal">
                  Password
                </Label>
                <Input
                  id="password"
                  placeholder="Enter your password"
                  type="password"
                  required
                  className="h-12"
                />
              </div>

              <div>
                <div className="text-sm text-gray-500 hover:text-gray-700 transition-colors">
                  Forgot username or password?
                </div>
              </div>

              <Button
                type="submit"
                size={'default'}
                variant={'outline'}
                className="w-full h-12 bg-blue-200 hover:bg-blue-300 text-gray-800 font-medium"
              >
                Log in
              </Button>

              <div className="text-center text-sm text-gray-600 pt-1">
                Don't have an account?{' '}
                <div
                  onClick={() => {
                    navigate('/register');
                  }}
                  className="text-gray-900 font-medium hover:underline"
                >
                  Sign up
                </div>
              </div>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

export default LoginPage;
