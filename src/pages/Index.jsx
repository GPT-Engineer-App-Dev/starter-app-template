import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Home, Settings, User } from 'lucide-react';

export default function Index() {
  return (
    <div className="container mx-auto p-4">
      <header className="mb-8">
        <h1 className="text-3xl font-bold">My Application</h1>
        <nav className="mt-4">
          <Button variant="ghost" className="mr-2"><Home className="mr-2 h-4 w-4" /> Home</Button>
          <Button variant="ghost" className="mr-2"><User className="mr-2 h-4 w-4" /> Profile</Button>
          <Button variant="ghost"><Settings className="mr-2 h-4 w-4" /> Settings</Button>
        </nav>
      </header>

      <main>
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Welcome</CardTitle>
            <CardDescription>This is a bare-bones application you can build upon.</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Start by modifying this content or adding new components.</p>
          </CardContent>
          <CardFooter>
            <Button>Get Started</Button>
          </CardFooter>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[1, 2, 3].map((item) => (
            <Card key={item}>
              <CardHeader>
                <CardTitle>Card {item}</CardTitle>
                <CardDescription>Description for Card {item}</CardDescription>
              </CardHeader>
              <CardContent>
                <img src="/placeholder.svg" alt={`Placeholder ${item}`} className="mx-auto object-cover w-full h-40" />
              </CardContent>
            </Card>
          ))}
        </div>
      </main>

      <footer className="mt-8 text-center text-gray-500">
        <p>&copy; 2023 My Application. All rights reserved.</p>
      </footer>
    </div>
  );
}