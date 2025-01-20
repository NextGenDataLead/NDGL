// Client-side email handling
export async function sendEmail(formData: {
  name: string;
  email: string;
  company?: string;
  message: string;
}) {
  try {
    // For static export, we'll use a different approach
    // This could be an API endpoint, Netlify function, or other serverless solution
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY,
        ...formData,
      }),
    });

    const data = await response.json();
    if (data.success) {
      return { success: true };
    }

    return { success: false, error: 'Failed to send message. Please try again.' };
  } catch (error) {
    console.error('Error sending email:', error);
    return { success: false, error: 'Failed to send message. Please try again.' };
  }
}