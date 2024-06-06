package ossp_bajoobang.bajoobang.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import ossp_bajoobang.bajoobang.domain.PlusRequest;
import ossp_bajoobang.bajoobang.domain.Request;

import java.util.List;

@Repository
public interface PlusRequestRepository extends JpaRepository<PlusRequest, Long> {

    PlusRequest save(PlusRequest plusRequest);

    List<PlusRequest> findByRequest(Request request);
}

