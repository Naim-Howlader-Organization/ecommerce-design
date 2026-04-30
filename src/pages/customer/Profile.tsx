import { useAuth } from "@/lib/auth";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const Profile = () => {
  const user = useAuth();
  return (
    <div className="space-y-6">
      <div className="bg-background border rounded-xl p-6">
        <div className="flex items-center gap-5 mb-6">
          <div className="h-16 w-16 rounded-full bg-foreground text-background flex items-center justify-center text-xl font-display font-bold uppercase">
            {user?.name?.[0] ?? "U"}
          </div>
          <div>
            <p className="font-display text-xl font-bold">{user?.name}</p>
            <p className="text-sm text-muted-foreground">{user?.email}</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="space-y-2">
            <Label>Full Name</Label>
            <Input defaultValue={user?.name ?? "Jane Doe"} />
          </div>
          <div className="space-y-2">
            <Label>Email</Label>
            <Input defaultValue={user?.email ?? ""} />
          </div>
          <div className="space-y-2">
            <Label>Phone</Label>
            <Input defaultValue="+1 (555) 123-4567" />
          </div>
          <div className="space-y-2">
            <Label>Country</Label>
            <Input defaultValue="United States" />
          </div>
        </div>
        <Button className="mt-6">Save Changes</Button>
      </div>

      <div className="bg-background border rounded-xl p-6">
        <h3 className="font-display text-lg font-bold mb-4">Default Address</h3>
        <p className="text-sm text-muted-foreground leading-relaxed">
          221B Baker Street<br />
          Apt 4B<br />
          New York, NY 10001<br />
          United States
        </p>
      </div>
    </div>
  );
};

export default Profile;
