import type { APIRoute } from 'astro';
import {
  getProjects,
  getProjectById,
  createProject,
  updateProject,
  deleteProject,
  type Project,
} from '../../lib/db.js';
import { uploadImage } from '../../lib/cloudinary.js';

export const GET: APIRoute = async ({ url }) => {
  try {
    const id = url.searchParams.get('id');

    if (id) {
      const proj = await getProjectById(Number(id));
      if (!proj) {
        return new Response(JSON.stringify({ error: 'Project not found' }), {
          status: 404,
          headers: { 'Content-Type': 'application/json' },
        });
      }
      return new Response(JSON.stringify(proj), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const projs = await getProjects();
    return new Response(JSON.stringify(projs), {
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
    const formData = await request.formData();
    const imageFile = formData.get('image') as File | null;
    let imageUrl = '';

    if (imageFile && imageFile.size > 0) {
      try {
        imageUrl = await uploadImage(imageFile);
      } catch (uploadError) {
        console.error('Upload Error:', uploadError);
        return new Response(JSON.stringify({ error: 'Failed to upload image' }), {
          status: 500,
          headers: { 'Content-Type': 'application/json' },
        });
      }
    }

    const name = formData.get('name');
    const date = formData.get('date');

    if (!name || typeof name !== 'string') {
      return new Response(JSON.stringify({ error: 'Name is required' }), { status: 400 });
    }
    if (!date || typeof date !== 'string') {
      return new Response(JSON.stringify({ error: 'Date is required' }), { status: 400 });
    }

    const data: Omit<Project, 'id' | 'created_at' | 'updated_at'> = {
      name: name,
      link: (formData.get('link') as string) || '',
      repo_link: (formData.get('repo_link') as string) || '',
      date: date,
      technos: JSON.parse(formData.get('technos') as string || '[]'),
      type: JSON.parse(formData.get('type') as string || '[]'),
      image: imageUrl || (formData.get('image_url') as string) || '',
      content_en: (formData.get('content_en') as string) || '',
      content_id: (formData.get('content_id') as string) || '',
      image_ext: (imageFile?.name.split('.').pop() || 'png'),
    };

    const proj = await createProject(data);
    return new Response(JSON.stringify(proj), {
      status: 201,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('API Error:', error);
    return new Response(JSON.stringify({ error: 'Failed to create project' }), {
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

    const formData = await request.formData();
    const imageFile = formData.get('image') as File | null;
    let imageUrl = formData.get('image_url') as string | undefined;

    if (imageFile && imageFile.size > 0) {
      try {
        imageUrl = await uploadImage(imageFile);
      } catch (uploadError) {
        console.error('Upload Error:', uploadError);
        return new Response(JSON.stringify({ error: 'Failed to upload image' }), {
          status: 500,
          headers: { 'Content-Type': 'application/json' },
        });
      }
    }

    const name = formData.get('name');
    const date = formData.get('date');

    // Partial update, but if provided, must be string
    const data: Partial<Omit<Project, 'id' | 'created_at' | 'updated_at'>> = {};
    if (name && typeof name === 'string') data.name = name;
    if (date && typeof date === 'string') data.date = date;

    const link = formData.get('link');
    if (link !== null) data.link = (link as string) || '';

    const repo_link = formData.get('repo_link');
    if (repo_link !== null) data.repo_link = (repo_link as string) || '';

    const technos = formData.get('technos');
    if (technos) data.technos = JSON.parse(technos as string);

    const type = formData.get('type');
    if (type) data.type = JSON.parse(type as string);

    if (imageUrl) {
      data.image = imageUrl;
    }

    const content_en = formData.get('content_en');
    if (content_en !== null) data.content_en = content_en as string;

    const content_id = formData.get('content_id');
    if (content_id !== null) data.content_id = content_id as string;

    const proj = await updateProject(Number(id), data);
    return new Response(JSON.stringify(proj), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('API Error:', error);
    return new Response(JSON.stringify({ error: 'Failed to update project' }), {
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

    await deleteProject(Number(id));
    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('API Error:', error);
    return new Response(JSON.stringify({ error: 'Failed to delete project' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};
