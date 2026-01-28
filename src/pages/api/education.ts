import type { APIRoute } from 'astro';
import {
  getEducation,
  getEducationById,
  createEducation,
  updateEducation,
  deleteEducation,
  type Education,
} from '../../lib/db.js';

export const GET: APIRoute = async ({ url }) => {
  try {
    const id = url.searchParams.get('id');

    if (id) {
      const edu = await getEducationById(Number(id));
      if (!edu) {
        return new Response(JSON.stringify({ error: 'Education not found' }), {
          status: 404,
          headers: { 'Content-Type': 'application/json' },
        });
      }
      return new Response(JSON.stringify(edu), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const educations = await getEducation();
    return new Response(JSON.stringify(educations), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('API Error:', error);
    return new Response(JSON.stringify({ error: 'Internal server error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};

export const POST: APIRoute = async ({ request }) => {
  try {
    const data = (await request.json()) as Omit<Education, 'id' | 'created_at' | 'updated_at'>;
    const edu = await createEducation(data);
    return new Response(JSON.stringify(edu), {
      status: 201,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('API Error:', error);
    return new Response(JSON.stringify({ error: 'Failed to create education' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};

export const PUT: APIRoute = async ({ request, url }) => {
  try {
    const id = url.searchParams.get('id');
    if (!id) {
      return new Response(JSON.stringify({ error: 'ID is required' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const data = (await request.json()) as Partial<Omit<Education, 'id' | 'created_at' | 'updated_at'>>;
    const edu = await updateEducation(Number(id), data);
    return new Response(JSON.stringify(edu), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('API Error:', error);
    return new Response(JSON.stringify({ error: 'Failed to update education' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};

export const DELETE: APIRoute = async ({ url }) => {
  try {
    const id = url.searchParams.get('id');
    if (!id) {
      return new Response(JSON.stringify({ error: 'ID is required' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    await deleteEducation(Number(id));
    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('API Error:', error);
    return new Response(JSON.stringify({ error: 'Failed to delete education' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};
