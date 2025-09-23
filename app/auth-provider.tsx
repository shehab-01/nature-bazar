"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import type { Session, User } from "@supabase/supabase-js";

// Profile type remains the same
type Profile = {
  id: string;
  name: string;
  role: string;
  approve_yn: boolean;
};

type AuthContextType = {
  session: Session | null;
  user: User | null;
  profile: Profile | null;
  loading: boolean;
};

const AuthContext = createContext<AuthContextType>({
  session: null,
  user: null,
  profile: null,
  loading: true,
});

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [session, setSession] = useState<Session | null>(null);
  const [user, setUser] = useState<User | null>(null);
  const [profile, setProfile] = useState<Profile | null>(null);
  const [loading, setLoading] = useState(true); // Start loading until initial check is done

  useEffect(() => {
    // No need for a separate getInitialSession function.
    // onAuthStateChange handles everything: login, logout, and the initial session check.
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(async (_event, session) => {
      // This async callback will run on the initial load and every auth change.
      if (session) {
        // If a session exists, set user data and fetch the profile.
        setSession(session);
        setUser(session.user);

        const { data: userProfile } = await supabase
          .from("profiles")
          .select("id, name, role, approve_yn")
          .eq("id", session.user.id)
          .single();

        setProfile(userProfile);
      } else {
        // IMPORTANT: If the session is null (user logged out), clear all user-related state.
        setSession(null);
        setUser(null);
        setProfile(null);
      }
      // Set loading to false only after the initial check is complete.
      setLoading(false);
    });

    // Cleanup the subscription when the component unmounts
    return () => subscription.unsubscribe();
  }, []); // Empty array ensures this effect runs only once

  const value = { session, user, profile, loading };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  return useContext(AuthContext);
}
