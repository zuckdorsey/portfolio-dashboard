import { o as deleteProject, p as getProjectById, q as getProjects, r as createProject, s as updateProject } from '../../chunks/db_Dwi_5F6a.mjs';
import { v2 } from 'cloudinary';
export { renderers } from '../../renderers.mjs';

v2.config({
  cloud_name: "dqbcy7jki",
  api_key: "489683245719276",
  api_secret: "H1H6O7KnYomWbiNgQON2bnrv55I",
  secure: true
});
const uploadImage = async (file) => {
  const arrayBuffer = await file.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);
  return new Promise((resolve, reject) => {
    v2.uploader.upload_stream(
      {
        folder: "portfolio"
      },
      (error, result) => {
        if (error) return reject(error);
        resolve(result?.secure_url || "");
      }
    ).end(buffer);
  });
};

const GET = async ({ url }) => {
  try {
    const id = url.searchParams.get("id");
    if (id) {
      const proj = await getProjectById(Number(id));
      if (!proj) {
        return new Response(JSON.stringify({ error: "Project not found" }), {
          status: 404,
          headers: { "Content-Type": "application/json" }
        });
      }
      return new Response(JSON.stringify(proj), {
        status: 200,
        headers: { "Content-Type": "application/json" }
      });
    }
    const projs = await getProjects();
    return new Response(JSON.stringify(projs), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (error) {
    console.error("API Error:", error);
    return new Response(JSON.stringify({ error: "Internal server error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
};
const POST = async ({ request }) => {
  try {
    const formData = await request.formData();
    const imageFile = formData.get("image");
    let imageUrl = "";
    if (imageFile && imageFile.size > 0) {
      try {
        imageUrl = await uploadImage(imageFile);
      } catch (uploadError) {
        console.error("Upload Error:", uploadError);
        return new Response(JSON.stringify({ error: "Failed to upload image" }), {
          status: 500,
          headers: { "Content-Type": "application/json" }
        });
      }
    }
    const name = formData.get("name");
    const date = formData.get("date");
    if (!name || typeof name !== "string") {
      return new Response(JSON.stringify({ error: "Name is required" }), { status: 400 });
    }
    if (!date || typeof date !== "string") {
      return new Response(JSON.stringify({ error: "Date is required" }), { status: 400 });
    }
    const data = {
      name,
      link: formData.get("link") || "",
      repo_link: formData.get("repo_link") || "",
      date,
      technos: JSON.parse(formData.get("technos") || "[]"),
      type: JSON.parse(formData.get("type") || "[]"),
      image: imageUrl || formData.get("image_url") || "",
      content_en: formData.get("content_en") || "",
      content_id: formData.get("content_id") || "",
      image_ext: imageFile?.name.split(".").pop() || "png"
    };
    const proj = await createProject(data);
    return new Response(JSON.stringify(proj), {
      status: 201,
      headers: { "Content-Type": "application/json" }
    });
  } catch (error) {
    console.error("API Error:", error);
    return new Response(JSON.stringify({ error: "Failed to create project" }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
};
const PUT = async ({ request, url }) => {
  try {
    const id = url.searchParams.get("id");
    if (!id) {
      return new Response(JSON.stringify({ error: "ID is required" }), {
        status: 400,
        headers: { "Content-Type": "application/json" }
      });
    }
    const formData = await request.formData();
    const imageFile = formData.get("image");
    let imageUrl = formData.get("image_url");
    if (imageFile && imageFile.size > 0) {
      try {
        imageUrl = await uploadImage(imageFile);
      } catch (uploadError) {
        console.error("Upload Error:", uploadError);
        return new Response(JSON.stringify({ error: "Failed to upload image" }), {
          status: 500,
          headers: { "Content-Type": "application/json" }
        });
      }
    }
    const name = formData.get("name");
    const date = formData.get("date");
    const data = {};
    if (name && typeof name === "string") data.name = name;
    if (date && typeof date === "string") data.date = date;
    const link = formData.get("link");
    if (link !== null) data.link = link || "";
    const repo_link = formData.get("repo_link");
    if (repo_link !== null) data.repo_link = repo_link || "";
    const technos = formData.get("technos");
    if (technos) data.technos = JSON.parse(technos);
    const type = formData.get("type");
    if (type) data.type = JSON.parse(type);
    if (imageUrl) {
      data.image = imageUrl;
    }
    const content_en = formData.get("content_en");
    if (content_en !== null) data.content_en = content_en;
    const content_id = formData.get("content_id");
    if (content_id !== null) data.content_id = content_id;
    const proj = await updateProject(Number(id), data);
    return new Response(JSON.stringify(proj), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (error) {
    console.error("API Error:", error);
    return new Response(JSON.stringify({ error: "Failed to update project" }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
};
const DELETE = async ({ url }) => {
  try {
    const id = url.searchParams.get("id");
    if (!id) {
      return new Response(JSON.stringify({ error: "ID is required" }), {
        status: 400,
        headers: { "Content-Type": "application/json" }
      });
    }
    await deleteProject(Number(id));
    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (error) {
    console.error("API Error:", error);
    return new Response(JSON.stringify({ error: "Failed to delete project" }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    DELETE,
    GET,
    POST,
    PUT
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
