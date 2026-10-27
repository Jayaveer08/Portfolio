"use client";

import React, { useState } from "react";

interface EmailLinkProps {
  className?: string;
  email?: string;
  children: React.ReactNode;
  copiedText?: string;
  style?: React.CSSProperties;
}

export default function EmailLink({
  className = "",
  email = "nallapatijayaveer@gmail.com",
  children,
  copiedText = "Email copied! Opening Gmail... ✓",
  style,
}: EmailLinkProps) {
  const [copied, setCopied] = useState(false);

  const handleClick = () => {
    try {
      if (navigator.clipboard) {
        navigator.clipboard.writeText(email);
        setCopied(true);
        setTimeout(() => setCopied(false), 2500);
      }
    } catch {
      // fallback if clipboard permission is restricted
    }
  };

  const isMobile =
    typeof navigator !== "undefined" &&
    /Android|iPhone|iPad|iPod|webOS|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );

  const href = isMobile
    ? `mailto:${email}`
    : `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}`;

  return (
    <a
      href={href}
      target={isMobile ? undefined : "_blank"}
      rel={isMobile ? undefined : "noreferrer"}
      className={className}
      onClick={handleClick}
      style={style}
      title={`Email ${email} (opens Gmail & copies email)`}
    >
      {copied ? copiedText : children}
    </a>
  );
}
